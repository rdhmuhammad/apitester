package payload

type ResponseMeta struct {
	Success      bool   `json:"success"`
	MessageTitle string `json:"messageTitle"`
	Message      string `json:"message"`
	ErrorServer  string `json:"errorServer"`
}

type ErrorResponse struct {
	ResponseMeta
	Data   any `json:"data"`
	Errors any `json:"errors,omitempty"`
}

func DefaultErrorResponse(err error) *ErrorResponse {
	return DefaultErrorResponseWithMessage("Internal Error", err)
}

func DefaultErrorResponseWithMessage(msg string, err error) *ErrorResponse {
	return &ErrorResponse{
		ResponseMeta: ResponseMeta{
			Success:      false,
			MessageTitle: "Oops, something went wrong.",
			Message:      msg,
			ErrorServer:  err.Error(),
		},
		Data: nil,
	}
}

func DefaultErrorInvalidDataWithMessage(msg string) *ErrorResponse {
	return &ErrorResponse{
		ResponseMeta: ResponseMeta{
			Success:      false,
			MessageTitle: "Invalid data.",
			Message:      msg,
		},
	}
}

func DefaultDataInvalidResponse(validationErrors any) *ErrorResponse {
	return &ErrorResponse{
		ResponseMeta: ResponseMeta{
			MessageTitle: "Oops, something went wrong.",
			Message:      "Data invalid.",
		},
		Errors: validationErrors,
	}
}

func DefaultBadRequestResponse() *ErrorResponse {
	return DefaultErrorResponseWithMessage("Bad request", nil)
}

type Response struct {
	ResponseMeta
	Data any `json:"data"`
}

func DefaultInvalidInputFormResponse(errs map[string][]string) *Response {
	var msg string
	for _, val := range errs {
		msg = val[0]
		break
	}

	return &Response{
		ResponseMeta: ResponseMeta{
			Success: false,
			Message: msg,
		},

		Data: errs,
	}
}

func NewSuccessResponseNoMsg(data any) *Response {
	return &Response{
		ResponseMeta: ResponseMeta{
			Success:      true,
			MessageTitle: "Success",
		},
		Data: data,
	}
}

func NewSuccessResponseNoData(msg string) *Response {
	return &Response{
		ResponseMeta: ResponseMeta{
			Success:      true,
			Message:      msg,
			MessageTitle: "Success",
		},
	}
}

func NewSuccessResponse(data any, msg string) *Response {
	return &Response{
		ResponseMeta: ResponseMeta{
			Success:      true,
			Message:      msg,
			MessageTitle: "Success",
		},
		Data: data,
	}
}
