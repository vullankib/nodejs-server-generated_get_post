'use strict';

var utils = require('../utils/writer.js');
var Skills = require('../service/SkillsService');

module.exports.getSkillsId = function getSkillsId (req, res, next, id) {
  Skills.getSkillsId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postSkillsId = function postSkillsId (req, res, next, body, id) {
  Skills.postSkillsId(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
