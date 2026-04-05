package mapper

import (
	"errors"
	"fmt"
	"net/http"
	"regexp"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/rdhmuhammad/apitester/pkg/localerror"
	payload "github.com/rdhmuhammad/apitester/shared/payload"
)

func (m Mapper) NewResponse(c *gin.Context, res *payload.Response, err error) {
	if err != nil {
		if m.IsAccessControlError(err) {
			c.JSON(
				http.StatusUnauthorized,
				payload.DefaultErrorInvalidDataWithMessage(err.Error()),
			)
			return
		}
		fmt.Printf("ERROR: %s \n", err.Error())
		c.JSON(
			http.StatusInternalServerError,
			payload.DefaultErrorResponseWithMessage(err.Error(), err),
		)
		return
	}
	if res != nil {
		res.Message = "Success"
		c.JSON(http.StatusOK, res)
		return
	}

	c.Status(http.StatusOK)
}

func (m Mapper) IsInvalidDataError(err error) (bool, localerror.InvalidDataError) {
	var invalidDataError localerror.InvalidDataError
	if errors.As(err, &invalidDataError) {
		return true, invalidDataError
	}
	return false, invalidDataError
}

func (m Mapper) IsAccessControlError(err error) bool {
	var invalidDataError localerror.AccessControlError
	if errors.As(err, &invalidDataError) {
		return true
	}
	return false
}

func (m Mapper) CompareSliceOfErr(errs []error, target error) bool {
	for _, err := range errs {
		if errors.Is(err, target) {
			return true
		}
		if m.ErrorIs(err, target) {
			return true
		}
	}

	return false
}

func (m Mapper) ErrorIs(template error, targer error) bool {
	re := regexp.MustCompile(`\{[0-9]+}`)
	pattern := re.ReplaceAllString(template.Error(), ".+")

	match, err := regexp.MatchString(pattern+"$", targer.Error())
	if err != nil {

		return false
	}

	if match {
		return true
	}

	return false
}

func (m Mapper) ReplaceLabelErr(template error, params ...string) error {
	customeErr := template.Error()
	for i, param := range params {
		customeErr = strings.Replace(
			customeErr,
			fmt.Sprintf("{%d}", i),
			param,
			-1,
		)
	}

	return fmt.Errorf(customeErr)
}
