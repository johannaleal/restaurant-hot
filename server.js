// express
const express = require("express");

// setup the server (app)
const app = express();

// setup a port
const PORT = process.env.PORT || 4500;

app.use(express.static("public"));

// DATA
// reservation list
const reservations = [
  {
    name: "Person One",
    partySize: 4,
  },
];
// wait list
const waitList = [
  {
    name: "Waitlist One",
    partySize: 2,
  },
];

// reservation routes
// GET /api/reservations - gives back an array of reservations
// POST /api/reservations - creates a new reservation
// GET /api/waitlist - gives back waitlisted reservations

// frontend routes
// GET / - loads the index.html
// GET /reservations - load reservations html
// GET /reservations/new - load makeReservations.html

// start the server listening for requests
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

// set up routes for displaying the HTML pages

// use jQuery to run AJAX calls to GET data from users
// to the Express server

// use jQuery to run AJAX calls to POST data from users
// to the Express server
