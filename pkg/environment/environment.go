//go:generate mockery --all --inpackage --case snake

package environment

import (
	"fmt"
	"os"
	"strconv"
)

func NewEnvironment() ENV {
	return ENV{}
}

type ENV struct{}

func (e ENV) GetFloat(key string, defaultValue float64) float64 {
	//TODO implement me
	panic("implement me")
}

func (e ENV) GetBranchID() uint {
	return e.GetUint("BRANCH_ID", 1)
}

func (ENV) Get(key string) string {
	return os.Getenv(key)
}

func (e ENV) CheckFlag(flag string) bool {
	str := os.Getenv(flag)
	status, err := strconv.ParseBool(str)
	if err != nil {

		return false
	}

	return status
}

func (e ENV) GetUint(key string, defaultValue uint) uint {
	str := os.Getenv(key)
	value, err := strconv.ParseUint(str, 10, 64)
	if err != nil {
		fmt.Println("featureflag.ENV.GetUint:", err)
		value = uint64(defaultValue)
	}

	return uint(value)
}

func (e ENV) GetInt(key string, defaultValue int) int {
	str := os.Getenv(key)
	value, err := strconv.ParseInt(str, 10, 64)
	if err != nil {
		fmt.Println("featureflag.ENV.GetInt:", err)
		value = int64(defaultValue)
	}

	return int(value)
}
