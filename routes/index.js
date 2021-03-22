const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("main");
});

router.get("/maps", async (req, res) => {
  res.render("maps");
});

router.get("/mapWorld8000", async (req, res) => {
  res.render("mapWorld8000");
});

router.get("/map7peaks", async (req, res) => {
  res.render("map7peaks");
});

module.exports = router;
