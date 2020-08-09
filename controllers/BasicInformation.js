'use strict';

var utils = require('../utils/writer.js');
var BasicInformation = require('../service/BasicInformationService');

module.exports.getBasics = function getBasics (req, res, next, id) {
  BasicInformation.getBasics(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
