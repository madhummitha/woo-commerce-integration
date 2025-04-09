const express = require('express');
const wooController = require('../controllers/wooCommerceController');

const router = express.Router();

// Get all products
router.get('/products', wooController.getProducts);

// Get a specific product
router.get('/products/:id', wooController.getProduct);

// Get all orders
router.get('/orders', wooController.getOrders);

// Get a specific order
router.get('/orders/:id', wooController.getOrder);

router.get('/customers/:id', wooController.getCustomer);

module.exports = router;