const Joi = require("@hapi/joi");

const profileIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createProfileSchema = {
  name: Joi.string()
    .max(50)
    .required(),
  heroTitle: Joi.string()
    .max(200)
    .required(),
  profileTitle: Joi.string()
    .max(200)
    .required(),
  description: Joi.string().required(),
  avatar: Joi.string().required()
};

const updateProfileSchema = {
  name: Joi.string().max(50),
  heroTitle: Joi.string().max(200),
  profileTitle: Joi.string().max(200),
  description: Joi.string(),
  avatar: Joi.string()
};

module.exports = {
  profileIdSchema,
  createProfileSchema,
  updateProfileSchema
};
