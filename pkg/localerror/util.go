package localerror

import (
	"errors"

	"github.com/rdhmuhammad/apitester/pkg/logger"
)

type InvalidDataError struct {
	Msg             string
	DataToTemplated map[string]string
}

func (e InvalidDataError) Error() string {
	return e.Msg
}

type AccessControlError struct {
	Msg string
}

func (e AccessControlError) Error() string {
	return e.Msg
}

//func AccessNotAllowedUserNotFound(err error) error {
//	if err != nil && errors.Is(err, gorm.ErrRecordNotFound) {
//		return AccessControlError{Msg: constant.SessionExpired.String()}
//	}
//
//	return err
//}

func IsAccessNotAllowedUserNotFound(err error) bool {
	return err != nil && errors.Is(err, AccessControlError{Msg: "Session Expired"})
}

func IsNotFound(err error) bool {
	return errors.Is(err, InvalidDataError{Msg: err.Error()})
}

func IsInvalidData(err error) bool {
	return err != nil && errors.As(err, &InvalidDataError{})
}

//func NotFound(err error, msg string) error {
//	if err != nil && errors.Is(err, gorm.ErrRecordNotFound) {
//		return InvalidDataError{Msg: msg}
//	}
//	return err
//}

func IsNotFoundStr(target string, source error) bool {
	var newErr = InvalidDataError{}
	if errors.As(source, &newErr) {
		return target == newErr.Msg
	}

	return false
}

func InvalidData(msg string) error {
	return InvalidDataError{Msg: msg}
}

func InvalidDataWithData(msg string, data map[string]string) error {
	return InvalidDataError{Msg: msg, DataToTemplated: data}
}

type InternalError struct {
	Msg string
}

func (receiver InternalError) Error() string {
	return receiver.Msg
}

type HandleError struct {
	logger *logger.ReZero
}

func NewHandlerError(lg *logger.ReZero) HandleError {
	return HandleError{
		logger: lg,
	}
}

func (h HandleError) ErrorPrint(err error) {
	h.logger.Error(err)
}

func (h HandleError) DebugPrint(err string, v ...interface{}) {
	h.logger.Debugf(err, v)
}

func (h HandleError) ErrorReturn(err error) error {
	if IsAccessNotAllowedUserNotFound(err) ||
		IsNotFound(err) || IsInvalidData(err) {
		return err
	}

	h.logger.Error(err)
	return InternalError{err.Error()}
}
