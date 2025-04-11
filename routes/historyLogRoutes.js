const express = require('express');
const router = express.Router();
const historyLogController = require('../controllers/historyLogController');
const { verifyToken } = require('../middlewares/authMiddleware');

// Routes for history logs
router.get('/', verifyToken, historyLogController.getAllLogs);
router.post('/', verifyToken, historyLogController.logChange);

module.exports = router;
