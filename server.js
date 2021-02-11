// express
const express = require("express");

// setup the server (app)
const app = express();

// setup a port
const PORT = process.env.PORT || 4500;

app.use(express.static("public"));

// DATA - Loreto
// reservation list
// wait list

// reservation routes - Michelle
// GET /api/reservations - gives back an array of reservations
// POST /api/reservations - creates a new reservation
// GET /api/waitlist - gives back waitlisted reservations

// frontend routes - Johanna
// GET / - loads the index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// GET /reservations - load reservations html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'reservationviews.html')));

// GET /reservations/new - load makeReservations.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'reservationform.html')));

// start the server listening for requests
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})


