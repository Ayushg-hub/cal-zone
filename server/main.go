package main

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v5/pgtype"
	"github.com/jackc/pgx/v5/pgxpool"
)

func main() {
	const DATABASE_URL = "postgresql://localhost/testdb"
	dbpool, err := pgxpool.New(context.Background(), DATABASE_URL)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	defer dbpool.Close()

	var greeting string
	var temp_lo int
	var temp_hi int
	var prcp float32
	var date pgtype.Date
	err = dbpool.QueryRow(context.Background(), "SELECT $1 from weather", "; DELETE from weather ;").Scan(&greeting)
	if err != nil {
		fmt.Fprintf(os.Stderr, "QueryRow failed: %v\n", err)
		os.Exit(1)
	}

	fmt.Println(greeting, temp_lo, temp_hi, prcp, date)
}
