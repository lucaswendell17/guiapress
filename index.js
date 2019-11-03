const express = require("express");
const app = express();

// Express aceitar trabalhar com formulário
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static
app.use(express.static("public"));

// View Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log("O servidor está rodando");
});
