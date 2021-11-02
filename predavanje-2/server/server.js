const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const readDb = (path) => JSON.parse(fs.readFileSync(path));
const saveDb = (path, payload) => {
  fs.writeFileSync(path, JSON.stringify(payload), { encoding: "utf8" });
};
app.use(cors());
app.use(bodyParser({ extended: true }));

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
  oneTodo.kategorija = kategorije.find((k) => k.id === oneTodo.kategorija);
  res.send({ todo: oneTodo });
});

app.get("/kategorija/all", (req, res) => {
  const kategorije = readDb("db/kategorije.json");
  res.send({ kategorije });
});

app.put("/one", (req, res) => {
  const { id } = req.body;
  let todos = readDb("db/todos.json");
  todos = todos.map((item) => {
    if (item.id === id) {
      const { label, kategorija, stavke } = req.body;
      return {
        ...item,
        label,
        kategorija: kategorija.id,
        stavke,
      };
    }
    return item;
  });
  saveDb("db/todos.json", todos);
  res.send({ todos });
});

app.post("/one", (req, res) => {
  let todos = readDb("db/todos.json");
  const lastTodo = todos[todos.length - 1];
  todos.push({
    ...req.body,
    kategorija: req.body.kategorija && (req.body.kategorija.id || 1),
    id: lastTodo.id + 1,
    datum: new Date(),
  });
  saveDb("db/todos.json", todos);
  res.send({ todos });
});

app.delete("/one", (req, res) => {
  const { id } = req.query;
  const todos = readDb("db/todos.json");
  saveDb(
    "db/todos.json",
    todos.filter((t) => t.id != id)
  );
  res.send({});
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
