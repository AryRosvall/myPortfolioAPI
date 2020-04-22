const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');
const { emailSchema } = require('./schema');
const validation = require('../../../utils/middleware/validationHandler');

const router = express.Router();
router.post('/', validation(emailSchema), sendEmail);

function sendEmail(req, res, next) {
  Controller.sendEmail(req.body)
    .then((sendEmail) => {
      response.success(req, res, sendEmail, 200)
    })
    .catch(next);
}

module.exports = router;
