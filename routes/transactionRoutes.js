const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const { verifyToken } = require('../middlewares/authMiddleware');

// Routes for transactions
router.get('/', verifyToken, transactionController.getAllTransactions);
router.post('/', verifyToken, transactionController.createTransaction);

module.exports = router;
