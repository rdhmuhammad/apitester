package main

import (
	"flag"
	"log"

	"github.com/joho/godotenv"
	"github.com/rdhmuhammad/apitester/shared/api"
)

func main() {
	var envFile string
	flag.StringVar(&envFile, "env", ".env.stag", "Provide env file path")
	flag.Parse()
	err := godotenv.Load(envFile)
	if err != nil {
		log.Println(err)
		panic(err)

	}

	start := api.Default()

	err = start.Start()
	if err != nil {
		panic(err)
	}
}
