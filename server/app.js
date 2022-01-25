import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import * as dotenv from "dotenv";
const app = express();
const serverPort = 3000;
const port = process.env.PORT || serverPort;

dotenv.config();
app.use(cors());

app.get("/", async (req, res) => {
  const city = req.query.city;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
  );
  const body = await response.json();
  res.send(body);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
