const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { verifyToken, checkRole } = require('../middlewares/authMiddleware');

// Routes for categories
router.get('/', verifyToken, categoryController.getAllCategories);
router.get('/:id', verifyToken, categoryController.getCategoryById);
router.post('/', verifyToken, checkRole(['admin']), categoryController.createCategory);
router.put('/:id', verifyToken, checkRole(['admin']), categoryController.updateCategory);
router.delete('/:id', verifyToken, checkRole(['admin']), categoryController.deleteCategory);

module.exports = router;
