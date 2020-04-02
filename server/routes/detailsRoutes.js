const express = require('express');
const router = express.Router();
const controller = require('../controllers/detailsController.js');

router.get('/', controller.getAllDetails);

router.post('/', controller.postDetails);

router.put('/', controller.updateDetails);

router.delete('/', controller.deleteDetails);

module.exports = router;


// UPDATE venicle SET cost = '86000', color = 'lavender' WHERE id='11'
// UPDATE venicle SET cost = "13000" feature_six = "convertable sleeping area" WHERE id='11'