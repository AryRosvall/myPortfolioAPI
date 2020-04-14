const Joi = require("@hapi/joi");

const academicIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createAcademicSchema = {
  degree: Joi.string().max(50).required(),
  institution: Joi.string().max(200).required(),
  startDate: Joi.string().max(10).required(),
  endDate: Joi.string().max(10).required(),
  description: Joi.string().max(500).required(),
  location: Joi.string().max(50).required(),
  website: Joi.string().max(50).required(),
  order: Joi.number().required()
};

const updateAcademicSchema = {
  degree: Joi.string().max(50),
  institution: Joi.string().max(200),
  startDate: Joi.string().max(10),
  endDate: Joi.string().max(10),
  description: Joi.string().max(500),
  location: Joi.string().max(50),
  website: Joi.string().max(50),
  order: Joi.number()
};

module.exports = {
  academicIdSchema,
  createAcademicSchema,
  updateAcademicSchema
};
