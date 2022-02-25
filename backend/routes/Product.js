var express = require('express');
var router = express.Router();

const {Product_Controller} = require('../controller/products-Ctrl');



// -------- Add Product ----------//
router.post('/addproduct', Product_Controller.AddProduct)

// -------- fetch All Products ----------//
router.get('/allproducts', Product_Controller.AllProducts)

// -------- fetch Product by ID----------//
router.get('/product/:id', Product_Controller.fetchProductById)




module.exports = router;