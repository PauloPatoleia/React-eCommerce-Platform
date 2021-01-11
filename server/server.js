const express = require("express");
const products = require("./products");

const app = express();

app.get("/", (req, res) => {
  res.send("response");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});
app.listen(5000, () => console.log("server running"));
