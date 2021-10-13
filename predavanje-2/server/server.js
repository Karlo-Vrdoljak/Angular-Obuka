const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const cors = require("cors");

const readDb = (path) => JSON.parse(fs.readFileSync(path));

app.use(cors());

app.get("/", (req, res) => {
  const todos = readDb("db/todos.json");
  res.send({ todos });
});

app.get("/one", (req, res) => {
  const { id } = req.query;
  const todos = readDb("db/todos.json");
  const kategorije = readDb("db/kategorije.json");
  console.log(todos, id);
  const oneTodo = todos.find((item) => item.id === +id);
  oneTodo.kategorija = kategorije.find((k) => k.id === oneTodo.id);
  res.send({ todo: oneTodo });
});

app.get("/kategorija/all", (req, res) => {
  const kategorije = readDb("db/kategorije.json");
  res.send({ kategorije });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
