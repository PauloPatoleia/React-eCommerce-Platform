import express from "express"
import connectDB from "./mongodb/db"
import productRoutes from "./routes/productRoutes"
import expressConfig from "./config/express.config"


const app = express();
app.get("/", (req, res) => { 
  res.send("response");
});

app.use('/api/products', productRoutes);

var PORT = expressConfig.port || 5000;

connectDB.then(() => {
  app.listen(PORT, () =>
    console.log(`Server running in ${expressConfig.nodeEnv} on port ${PORT}`)
  );
});
