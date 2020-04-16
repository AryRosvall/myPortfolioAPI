const Joi = require("@hapi/joi");

const skillIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createSkillSchema = {
  name: Joi.string().max(50).required(),
  percentage: Joi.number().min(0).max(5).required(),
  type: Joi.string().max(20).required()
};

const updateSkillSchema = {
  name: Joi.string().max(50),
  percentage: Joi.number().min(0).max(5),
  type: Joi.string().max(20)
};

module.exports = {
  skillIdSchema,
  createSkillSchema,
  updateSkillSchema
};
