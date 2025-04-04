package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Define the folder that contains your static files
	fs := http.FileServer(http.Dir("./public"))

	// Serve static files from the "public" directory
	http.Handle("/", fs)

	// Define the port to listen on
	port := ":3000"
	fmt.Println("Serving on http://localhost" + port)

	// Start the server
	err := http.ListenAndServe(port, nil)
	if err != nil {
		fmt.Println("Error starting server:", err)
	}
}
