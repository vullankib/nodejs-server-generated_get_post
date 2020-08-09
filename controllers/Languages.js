'use strict';

var utils = require('../utils/writer.js');
var Languages = require('../service/LanguagesService');

module.exports.getLanaguagesId = function getLanaguagesId (req, res, next, id) {
  Languages.getLanaguagesId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
