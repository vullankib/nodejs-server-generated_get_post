'use strict';

var utils = require('../utils/writer.js');
var Work = require('../service/WorkService');

module.exports.getWorkId = function getWorkId (req, res, next, id) {
  Work.getWorkId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
