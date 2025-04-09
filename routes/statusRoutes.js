const express = require('express');
const statusController = require('../controllers/statusController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Status route!');});

module.exports = router;