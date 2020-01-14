const express = require('express');
const router = express.Router();
const { getLocations, addLocation } = require('../controllers/locations');


router.route('/').get(getLocations).post(addLocation);

module.exports = router;