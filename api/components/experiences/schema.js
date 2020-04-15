const Joi = require("@hapi/joi");

const experienceIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createExperienceSchema = {
  jobTitle: Joi.string().max(50).required(),
  company: Joi.string().max(200).required(),
  startDateLabel: Joi.string().max(10).required(),
  endDateLabel: Joi.string().max(10).required(),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().required(),
  jobDescription: Joi.string().max(500).required(),
  location: Joi.string().max(50).required(),
  website: Joi.string().max(50).required(),
  order: Joi.number().required()
};

const updateExperienceSchema = {
  jobTitle: Joi.string().max(50),
  company: Joi.string().max(200),
  startDateLabel: Joi.string().max(10),
  endDateLabel: Joi.string().max(10),
  startDate: Joi.date().iso(),
  endDate: Joi.date().iso(),
  jobDescription: Joi.string().max(500),
  location: Joi.string().max(50),
  website: Joi.string().max(50),
  order: Joi.number()
};

module.exports = {
  experienceIdSchema,
  createExperienceSchema,
  updateExperienceSchema
};
