'use strict';

var utils = require('../utils/writer.js');
var Education = require('../service/EducationService');

module.exports.getEducationId = function getEducationId (req, res, next, id) {
  Education.getEducationId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
