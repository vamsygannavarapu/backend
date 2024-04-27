// deploy this app when you are ready to deploy it in digitalOcean, etc

require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/name", (req, res) => {
  res.send("Hello Vamsy!");
});

app.get("/search", (req, res) => {
  res.send("<h1>you are in search page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
