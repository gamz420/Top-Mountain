const express = require("express");
require("dotenv").config();
const path = require("path");
const logger = require("morgan");
const index = require("./routes/index");

const app = express();

app.set("views", path.join(process.env.PWD, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(process.env.PWD, "public")));

app.use("/", index);

app.listen(process.env.PORT, () => {
  console.log("Server OK");
});


module.exports = app;
