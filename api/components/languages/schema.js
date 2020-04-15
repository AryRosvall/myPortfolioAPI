const Joi = require("@hapi/joi");

const languageIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createLanguageSchema = {
  name: Joi.string().max(50).required(),
  percentage: Joi.number().min(0).max(5).required()
};

const updateLanguageSchema = {
  name: Joi.string().max(50),
  percentage: Joi.number().min(0).max(5)
};

module.exports = {
  languageIdSchema,
  createLanguageSchema,
  updateLanguageSchema
};
