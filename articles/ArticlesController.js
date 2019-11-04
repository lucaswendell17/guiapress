const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
  res.send("Teste");
});

module.exports = router;
