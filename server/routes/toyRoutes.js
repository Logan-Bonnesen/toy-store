const express = require('express');
const toyController = require('../controllers/toyController')

const router = express.Router();

router.get('/toys', toyController.getAllToys);
router.post('/toys', toyController.createToy);

module.exports = router;
