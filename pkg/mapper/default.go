//go:generate mockery --all --inpackage --case snake

package mapper

import ()

type Mapper struct {
}

func NewMapper() Mapper {
	return Mapper{}
}
