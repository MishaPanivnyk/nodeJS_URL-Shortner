const shortid = require("shortid");
const Url = require("../models/uriModel");

const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;

  try {
    let url = await Url.findOne({ originalUrl });

    if (url) {
      res.json(url);
    } else {
      const shortUrl = shortid.generate();
      const newUrl = new Url({
        originalUrl,
        shortUrl,
      });

      url = await newUrl.save();
      res.json(url);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const redirectToUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });

    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: "URL not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createShortUrl, redirectToUrl };
