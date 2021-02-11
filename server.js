// express
const express = require("express");

// setup the server (app)
const app = express();

// setup a port
const PORT = process.env.PORT || 4500;

// link to array variables that will hold data

// routes
    // set up routes for getting table data

    // set up routes for posting table data


// start the server listening for requests
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

// set up routes for displaying the HTML pages

// use jQuery to run AJAX calls to GET data from users
// to the Express server

// use jQuery to run AJAX calls to POST data from users
// to the Express server
