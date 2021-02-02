"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./mongodb/db"));
var productRoutes_1 = __importDefault(require("./routes/productRoutes"));
var express_config_1 = __importDefault(require("./config/express.config"));
var app = express_1.default();
app.get("/", function (req, res) {
    res.send("response");
});
app.use('/api/products', productRoutes_1.default);
var PORT = express_config_1.default.port || 5000;
db_1.default.then(function () {
    app.listen(PORT, function () {
        return console.log("Server running in " + express_config_1.default.nodeEnv + " on port " + PORT);
    });
});
