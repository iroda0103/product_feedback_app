const Joi = require("joi");

exports.postUserSchema = {
  body: Joi.object({
    first_name: Joi.string().trim(),
    last_name: Joi.string().trim(),
    role: Joi.string().trim(),
    age: Joi.number().min(0),
    username: Joi.string().trim(),
    password: Joi.string().trim()
  })
};
