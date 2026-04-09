package db

import (
	"bytes"
	"context"
	"fmt"
	"github.com/google/uuid"

	"golang.org/x/exp/slices"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"
	"reflect"
	"regexp"
	"sort"
	"strings"
)

type CustomORM struct {
	db           *gorm.DB
	currSelected []string
	join         []interface{}
	currVal      []interface{}
	currQuery    string
	scope        func(db *gorm.DB) *gorm.DB
}

func NewCustomeORM(db *gorm.DB) *CustomORM {
	return &CustomORM{db: db}
}

func (repo *CustomORM) WithContext(ctx context.Context) *CustomORM {
	return &CustomORM{db: repo.db.WithContext(ctx)}
}

func PascalToSnake(input string) string {
	var output bytes.Buffer

	// Regular expression to match strings like UserID, CustomerID, ClientPlaceID
	re := regexp.MustCompile(`([a-z])([A-Z]+)`)
	snakeCaseStr := re.ReplaceAllString(input, "${1}_${2}")

	// Now convert the snake_case string to lowercase
	snakeCaseStr = strings.ToLower(snakeCaseStr)

	output.WriteString(snakeCaseStr)
	return output.String()
}

func GetColNames(table interface{}, excludeCols ...string) []string {
	sType := reflect.TypeOf(table)
	if sType.Kind() == reflect.Pointer {
		sType = sType.Elem()
	}
	var colNames []string

	for i := 0; i < sType.NumField(); i++ {
		f := sType.Field(i)
		gormTag := f.Tag.Get("gorm")
		colName := getColName(gormTag, f)
		if slices.Contains(excludeCols, colName) || colName == "id" {
			continue
		}
		colNames = append(colNames, colName)
	}

	return colNames
}

func getColName(gormTag string, f reflect.StructField) string {
	var colName string
	tags := strings.Split(gormTag, ";")
	for _, tag := range tags {
		if strings.Contains(tag, "column") {
			cn := strings.Split(tag, ":")
			if len(cn) < 2 {
				colName = PascalToSnake(f.Name)
				break
			}
			colName = cn[1]
			break
		}
		colName = PascalToSnake(f.Name)
	}
	return colName
}

func populatePlaceHolder(colsName []string, actualVal []interface{}) []string {
	var valPlaceholders = make([]string, len(colsName))
	for i := range colsName {
		valPlaceholders[i] = "?"
		if _, ok := actualVal[i].(uint); ok {
			valPlaceholders[i] = "uuid_to_bin(?)"
		}
	}

	return valPlaceholders
}

func getValueFromModel(model interface{}, colsSelected []string) []interface{} {
	pVal := reflect.ValueOf(model)
	pType := reflect.TypeOf(model)
	if pVal.Kind() == reflect.Pointer {
		pVal = pVal.Elem()
		pType = pType.Elem()
	}
	var vals = make([]interface{}, len(colsSelected))
	for i, s := range colsSelected {
		for j := 0; j < pVal.NumField(); j++ {
			gormTag := pType.Field(j).Tag.Get("gorm")
			var colName = getColName(gormTag, pType.Field(j))
			if colName == s {
				vals[i] = pVal.Field(j).Interface()
			}
		}
	}

	return vals
}

func (repo *CustomORM) Select(selected ...string) *CustomORM {
	repo.currSelected = selected
	return repo
}

func (repo *CustomORM) SetQuery(db *gorm.DB) {
	repo.db = db
}

func (repo *CustomORM) ExtractQuery() *gorm.DB {
	return repo.db
}

func (repo *CustomORM) Error() error {
	return repo.db.Error
}

func (repo *CustomORM) Update(model interface{}) *CustomORM {
	sType := reflect.TypeOf(model)
	if sType.Kind() == reflect.Pointer {
		sType = sType.Elem()
	}
	sVal := reflect.ValueOf(model)
	if sVal.Kind() == reflect.Pointer {
		sVal = sVal.Elem()
	}
	tableName := repo.extractTableName(sType)

	fields := repo.currSelected
	colsNVals := map[string]interface{}{}
	for _, field := range fields {
		f, ok := sType.FieldByName(field)
		if !ok {
			continue
		}

		val := sVal.FieldByName(field).Interface()
		if _, ok = val.(string); ok {
			val = fmt.Sprintf("'%s'", val)
		}
		gormTag := f.Tag.Get("gorm")
		switch {
		case strings.Contains(gormTag, "type:binary"):
			uuId := val.(uuid.UUID)
			val = fmt.Sprintf("uuid_to_bin('%s')", uuId.String())
		}

		var colName string
		tags := strings.Split(gormTag, ";")
		for _, tag := range tags {
			if strings.Contains(tag, "column") {
				cn := strings.Split(tag, ":")
				if len(cn) < 2 {
					colName = PascalToSnake(f.Name)
					break
				}
				colName = cn[1]
				break
			}
			colName = PascalToSnake(f.Name)
		}
		colsNVals[colName] = val
	}

	execQuery := fmt.Sprintf("UPDATE `%s` SET ", tableName)

	var countCols int
	colSorted := make([]string, len(colsNVals))
	i := 0
	for col, _ := range colsNVals {
		colSorted[i] = col
		i++
	}
	sort.Strings(colSorted)
	for _, col := range colSorted {
		execQuery += fmt.Sprintf("%s = %v", col, colsNVals[col])
		if countCols < len(colsNVals)-1 {
			execQuery += ", "
		}
		countCols++
	}
	execQuery += fmt.Sprintf(" WHERE id = uuid_to_bin('%s');", sVal.FieldByName("ID").Interface())

	return &CustomORM{
		db: repo.db.
			Exec(execQuery),
	}
}

func (repo *CustomORM) extractTableName(sType reflect.Type) string {
	var tableName string
	modelVal := reflect.New(sType)
	if tabler, ok := modelVal.Interface().(schema.Tabler); ok {
		tableName = tabler.TableName()
	}
	return tableName
}

func (repo *CustomORM) Store(model interface{}, ignoreFields ...string) *CustomORM {
	colsName := GetColNames(model, ignoreFields...)
	actualVal := getValueFromModel(model, colsName)
	placeHolder := populatePlaceHolder(colsName, actualVal)

	pType := reflect.TypeOf(model)
	if pType.Kind() == reflect.Pointer {
		pType = pType.Elem()
	}
	tableName := repo.extractTableName(pType)

	query := "INSERT INTO `" + tableName + "` " +
		"( " +
		"`id`, " + strings.Join(colsName, ", ") +
		" ) " +
		"values " +
		"(uuid_to_bin(uuid()), " + strings.Join(placeHolder, ", ") + ");"

	return &CustomORM{db: repo.db.
		Exec(
			query,
			actualVal...,
		).
		Find(&model),
	}
}

func (repo *CustomORM) Scope(db func(db *gorm.DB) *gorm.DB) {
	repo.scope = db
}

func (repo *CustomORM) Join(query interface{}) {
	repo.join = append(repo.join, query)
}

func (repo *CustomORM) Find(model interface{}) *CustomORM {
	var colsName = GetColNames(model)
	if len(repo.currSelected) > 0 {
		colsName = repo.currSelected
	}

	pType := reflect.TypeOf(model)
	if pType.Kind() == reflect.Pointer {
		pType = pType.Elem()
	}
	tableName := repo.extractTableName(pType)
	var columns = make([]clause.Column, len(colsName))
	for i, s := range colsName {
		columns[i] = clause.Column{Table: tableName, Name: s}
	}

	var st gorm.Statement
	st.Table = tableName
	st.Clauses = map[string]clause.Clause{
		"SELECT": {Expression: clause.Select{
			Columns: columns,
		}},
	}
	if repo.scope != nil {
		st.DB.Scopes()
	}

	var jStm = make([]clause.Join, len(repo.join))
	for _, j := range repo.join {
		if t, ok := j.(string); ok {
			jStm = append(jStm, repo.joinWithQuery(t))
			continue
		}
		typeOf := reflect.TypeOf(j)
		if typeOf.Kind() != reflect.Struct {
			repo.db.Error = fmt.Errorf("format should struct")
		}

		jStm = append(jStm, repo.joinWithModel(j))
	}

	db := st.Callback().Query().Execute(repo.db)

	repo.db = db
	return repo
}

func (repo *CustomORM) joinWithModel(model interface{}) clause.Join {

	return clause.Join{
		Type: clause.LeftJoin,
		Table: clause.Table{
			Name: repo.extractTableName(reflect.TypeOf(model)),
		},
		ON: clause.Where{
			Exprs: []clause.Expression{
				clause.Expr{SQL: "on "},
			},
		},
	}
}

func (repo *CustomORM) joinWithQuery(query string) clause.Join {
	return clause.Join{
		Expression: clause.Expr{SQL: query},
	}
}
