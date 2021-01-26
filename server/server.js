"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var products_1 = __importDefault(require("./products"));
var dotenv_1 = __importDefault(require("dotenv"));
var db_1 = __importDefault(require("./mongodb/db"));
dotenv_1.default.config();
var app = express_1.default();
app.get("/", function (req, res) {
    res.send("response");
});
app.get("/api/products", function (req, res) {
    res.json(products_1.default);
});
app.get("/api/products/:id", function (req, res) {
    var product = products_1.default.find(function (product) { return product._id === +req.params.id; });
    res.json(product);
});
var PORT = process.env.PORT || 5000;
db_1.default.then(function () {
    app.listen(PORT, function () {
        return console.log("Server running in " + process.env.NODE_ENV + " on port " + PORT);
    });
});
