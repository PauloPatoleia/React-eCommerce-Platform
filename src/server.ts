import express from "express"
import dotenv from "dotenv"
import connectDB from "./mongodb/db"
import productRoutes from "./routes/productRoutes.js"

dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.send("response");
});

app.use('/api/products', productRoutes);

var PORT = process.env.PORT || 5000;

connectDB.then(() => {
  app.listen(PORT, () =>
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
  );
});
