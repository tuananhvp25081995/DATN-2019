var express = require('express');
var controller = require('../controllers/cart.controller');
var router = express.Router();
var authMiddleware = require('../middlewares/auth.middleware');

router.get('/add/:productId',authMiddleware.requireAuth, controller.addToCart);

module.exports = router;
