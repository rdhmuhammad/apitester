package environment

type EnvironmentEntry struct {
	Name      string            `json:"name"`
	Variables map[string]string `json:"variables"`
}

type ReadEnvironmentsResponse struct {
	Environments []EnvironmentEntry `json:"environments"`
}

type WriteEnvironmentsRequest struct {
	Environments []EnvironmentEntry `json:"environments" binding:"required"`
}
