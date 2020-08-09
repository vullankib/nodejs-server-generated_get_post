'use strict';

var utils = require('../utils/writer.js');
var Volunteer = require('../service/VolunteerService');

module.exports.getVolunteerId = function getVolunteerId (req, res, next, id) {
  Volunteer.getVolunteerId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
