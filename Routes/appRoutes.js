const express = require('express');

const router = express.Router();

const { getUser, postResp } = require("../Controllers/appController");

router.route('/user').get(getUser);
router.route('/post').post(postResp);

module.exports = router;