import express from "express";
import Product from "../mongodb/models/productModel"
const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get("/", (req, res) => {

  const products = Product.find({}).then((res: any) => {
  res.json(products);
  }).catch((err: any) => {
    res.status(404).json({message: "Products not found"})
  })

});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get("/:id", (req, res) => {
  const product = Product.findById(req.params.id).then((res: any) => {
    res.json(product);
    }).catch((err: any) => {
      res.status(404).json({message: "Product not found"})
    })
});

export default router;
