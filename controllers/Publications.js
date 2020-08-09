'use strict';

var utils = require('../utils/writer.js');
var Publications = require('../service/PublicationsService');

module.exports.getPublicationsId = function getPublicationsId (req, res, next, id) {
  Publications.getPublicationsId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
