const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');
const { verifyToken, checkRole } = require('../middlewares/authMiddleware');

// Routes for vendors
router.get('/', verifyToken, vendorController.getAllVendors);
router.get('/:id', verifyToken, vendorController.getVendorById);
router.post('/', verifyToken, checkRole(['admin']), vendorController.createVendor);
router.put('/:id', verifyToken, checkRole(['admin']), vendorController.updateVendor);
router.delete('/:id', verifyToken, checkRole(['admin']), vendorController.deleteVendor);

module.exports = router;
