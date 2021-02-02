import mongoose from "mongoose"
import dbConfig from "../config/mongo.config"

console.log("String " + dbConfig.mongoURI)
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
