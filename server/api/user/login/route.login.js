const express = require('express');
const router = express.Router();
const login = require('./controller.login/login');
const path = require('path');
const { body } = require('express-validator');
const validate = require('../../../middleware/validate');

const authToken = require('../../../middleware/authToken')

router.use(authToken)

router.post('/login',
    validate([
        body('email').isString(),
        body('password').isString(),
        ]),
    login.loginUser
);

module.exports = router;
