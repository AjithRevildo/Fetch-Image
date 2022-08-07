const express = require('express');
const router = express.Router();
const imageController= require('../controllers/image-controller');

/* GET home page. */
router.get('/index',imageController.index);

module.exports = router;



