const express = require('express');

const router = express.Router();

const { getUser, createUser } = require("../Controllers/userController");

router.route('/getUser').get(getUser);

router.route('/createUser').post(createUser);

module.exports = router;