const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const auth = require('../middleware/auth');

router.post('/', auth(['perito', 'admin']), reportController.createReport);

module.exports = router;