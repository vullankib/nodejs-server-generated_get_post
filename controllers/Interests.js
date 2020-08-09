'use strict';

var utils = require('../utils/writer.js');
var Interests = require('../service/InterestsService');

module.exports.getInterestsId = function getInterestsId (req, res, next, id) {
  Interests.getInterestsId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postUserIdInterests = function postUserIdInterests (req, res, next, body, id) {
  Interests.postUserIdInterests(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
