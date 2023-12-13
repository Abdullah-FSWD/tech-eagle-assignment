import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
