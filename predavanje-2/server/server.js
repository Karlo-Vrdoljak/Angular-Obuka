const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  const todos = JSON.parse(fs.readFileSync("db/todos.json"));
  res.send({ todos });
});

app.get("/one", (req, res) => {
  const { id } = req.query;
  const todos = JSON.parse(fs.readFileSync("db/todos.json"));
  console.log(todos, id);
  res.send({ todo: todos.find((item) => item.id === +id) });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
