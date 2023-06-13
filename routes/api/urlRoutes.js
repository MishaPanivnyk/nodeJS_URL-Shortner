// src/routes/urlRoutes.js
const express = require("express");
const router = express.Router();
const {
  createShortUrl,
  redirectToUrl,
} = require("../../controllers/urlController");

router.post("/shorten", createShortUrl);
router.get("/:shortUrl", redirectToUrl);

module.exports = router;
