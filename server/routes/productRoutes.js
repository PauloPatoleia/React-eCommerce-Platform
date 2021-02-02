"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productModel_1 = __importDefault(require("../mongodb/models/productModel"));
var router = express_1.default.Router();
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get("/", function (req, res) {
    productModel_1.default.find({}).then(function (products) {
        res.json(products);
    }).catch(function (err) {
        res.status(404).json({ message: "Product not found" });
    });
});
// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get("/:id", function (req, res) {
    productModel_1.default.findById(req.params.id).then(function (products) {
        res.json(products);
    }).catch(function (err) {
        res.status(404).json({ message: "Product not found" });
    });
});
exports.default = router;
