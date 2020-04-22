const Joi = require("@hapi/joi");

const emailSchema = {
  from: Joi.string().max(100).required(),
  to: Joi.string().max(100).required(),
  subject: Joi.string().max(78).required(),
  text: Joi.string().max(500).required(),
  html: Joi.string()
};

module.exports = {
  emailSchema
};
