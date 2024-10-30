const express = require('express');

const router = express.Router();

const { getListings, getAggs } = require("../Controllers/listingsAndReviewsController");

router.route('/getListings').get(getListings);
router.route('/getAggs').get(getAggs);

module.exports = router;