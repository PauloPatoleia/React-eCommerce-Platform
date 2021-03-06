"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var mongo_config_1 = __importDefault(require("../config/mongo.config"));
console.log("String " + mongo_config_1.default.mongoURI);
var connectDB = mongoose_1.default
    .connect(mongo_config_1.default.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(function (result) {
    console.log("Mongoose connected: " + result.connections[0].host);
})
    .catch(function (err) {
    console.log("Error: " + err.message);
});
exports.default = connectDB;
