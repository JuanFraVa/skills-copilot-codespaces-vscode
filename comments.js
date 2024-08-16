// Create web server
// Create a web server that listens on port 3000 and has the following functionality:
// 1. A POST route for /comments that accepts a JSON body with an email and comment property. 
// Store these in an array in the server and return a 201 status code.
// 2. A GET route for /comments that returns the array of comments.
// 3. A DELETE route for /comments that clears the array of comments.

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let comments = [];

app.post("/comments", (req, res) => {
  const { email, comment } = req.body;
  comments.push({ email, comment });
  res.sendStatus(201);
});

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.delete("/comments", (req, res) => {
  comments = [];
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});