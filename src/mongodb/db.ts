import mongoose from "mongoose"
import dotenv from "dotenv"
import dbConfig from "../config/mongo.config"

dotenv.config();

const connectDB = mongoose
  .connect(dbConfig.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log(`Mongoose connected: ${result.connections[0].host}`);
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`);
  });

export default connectDB;
