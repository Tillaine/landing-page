const express = require('express');

const router = express.Router();
const controller = require('../controllers/detailsController.js');

router.get('/', controller.getAllDetails);

module.exports = router;
