// express
const express = require("express");

// setup the server (app)
const app = express();

// setup a port
const PORT = process.env.PORT || 4500;


// routes
//app.get("/", (req, ))

// start the server listening for requests
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})