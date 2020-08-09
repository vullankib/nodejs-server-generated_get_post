'use strict';

var utils = require('../utils/writer.js');
var References = require('../service/ReferencesService');

module.exports.getReferencesId = function getReferencesId (req, res, next, id) {
  References.getReferencesId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
