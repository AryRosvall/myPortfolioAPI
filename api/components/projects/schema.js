const Joi = require("@hapi/joi");

const projectIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createProjectSchema = {
  cover: Joi.string().required(),
  title: Joi.string().max(20).required(),
  description: Joi.string().max(50).required()
};

const updateProjectSchema = {
  cover: Joi.string(),
  title: Joi.string().max(20),
  description: Joi.string().max(50)
};

module.exports = {
  projectIdSchema,
  createProjectSchema,
  updateProjectSchema
};
