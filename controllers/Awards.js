'use strict';

var utils = require('../utils/writer.js');
var Awards = require('../service/AwardsService');

module.exports.getAwardsId = function getAwardsId (req, res, next, id) {
  Awards.getAwardsId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
