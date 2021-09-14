const { Joi } = require("express-validation");
/**
 * Music Validators
 */

const MusicValidators = {
  validateCreate: {
    body: Joi.object({
      title: Joi.string().max(80).required(),
      genre: Joi.string().max(80).required(),
      length: Joi.number().min(0).required(),
      artist: Joi.string().max(100).required(),
    }),
  },
  validateUpdate: {
    params: Joi.object({
      guid: Joi.string().guid().required(),
    }),
    body: Joi.object({
      title: Joi.string().max(80).required(),
      genre: Joi.string().max(80).required(),
      length: Joi.number().min(0).required(),
      artist: Joi.string().max(100).required(),
    }),
  },
};

module.exports = MusicValidators;
