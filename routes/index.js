const express = require("express");
const router = express.Router();

// Главная страница
router.get("/", async (req, res) => {
  res.render("main");
});

// Страница выбора карты
router.get("/maps", async (req, res) => {
  res.render("maps");
});

// Страница с горами выше 8 тысяч метров
router.get("/mapWorld8000", async (req, res) => {
  res.render("mapWorld8000");
});

// Страница с самыми высокими горами континентов
router.get("/map7peaks", async (req, res) => {
  res.render("map7peaks");
});

module.exports = router;
