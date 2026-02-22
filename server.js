const express = require("express");
const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

const API_KEY = process.env.OPENWEATHER_KEY;
const PORT = process.env.PORT || 3000;

app.get("/weather", async (req, res) => {
  try {
    const city = req.query.city;

    if (!city) {
      return res.json({ error: "City is required" });
    }

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);

  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});