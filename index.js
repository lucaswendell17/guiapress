const express = require("express");
const app = express();
const connection = require("./database/database");
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

// Express body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static
app.use(express.static("public"));

// View Engine
app.set("view engine", "ejs");

// Database

connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso!");
  })
  .catch(error => {
    console.log(error);
  });

app.use("/", categoriesController);
app.use("/", articlesController);

app.listen(8080, () => {
  console.log("O servidor está rodando");
});
