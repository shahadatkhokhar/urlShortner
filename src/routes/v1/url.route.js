const express = require('express');
const urlController = require('../../controllers/url.controller');

const router = express.Router();

router.post('/create-url', urlController.createURL);
router.get('/get-url/:url_id', urlController.getURL);

module.exports = router;
