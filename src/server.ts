import express from "express"
import products from "./products"
import dotenv from "dotenv"
import connectDB from "./mongodb/db"

dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.send("response");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === +req.params.id);
  res.json(product);
});

var PORT = process.env.PORT || 5000;

connectDB.then(() => {
  app.listen(PORT, () =>
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
  );
});
