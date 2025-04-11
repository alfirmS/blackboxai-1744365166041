const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const { verifyToken, checkRole } = require('../middlewares/authMiddleware');

// Routes for inventory items
router.get('/', verifyToken, inventoryController.getAllItems);
router.get('/:id', verifyToken, inventoryController.getItemById);
router.post('/', verifyToken, checkRole(['admin']), inventoryController.createItem);
router.put('/:id', verifyToken, checkRole(['admin']), inventoryController.updateItem);
router.delete('/:id', verifyToken, checkRole(['admin']), inventoryController.deleteItem);

module.exports = router;
