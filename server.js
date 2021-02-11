// express
const express = require("express");

// setup the server (app)
const app = express();

// setup a port
const PORT = process.env.PORT || 4500;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA - Loreto
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

// reservation routes - Michelle
// GET /api/reservations - gives back an array of reservations
app.get("/api/reservations", (req, res) => res.json(reservations));

// GET /api/waitlist - gives back waitlisted reservations
app.get("/api/waitlist", (req, res) => res.json(waitList));

// POST /api/reservations - creates a new reservation
app.post("/api/reservations", (req, res) => {
  const newReservation = req.body;
  //make sure we only get name and partySize from the input
	let newRes = { 
		name: newReservation.name,
		partySize: newReservation.partySize
	};

	if (reservations.length < 4) {
		reservations.push(newRes);
		res.json(reservations);
	} else {
		waitList.push(newRes);
		res.json(waitList);
	}
});

// frontend routes - Johanna
// GET / - loads the index.html
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

// GET /reservations - load reservations html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "reservationviews.html"))
);

// GET /reservations/new - load makeReservations.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "reservationform.html"))
);

// start the server listening for requests
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
