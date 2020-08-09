'use strict';


/**
 * Your GET endpoint
 * Get work experience details
 *
 * id String 
 * returns List
 **/
exports.getWorkId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "role" : {
    "summary" : "summary",
    "website" : "website",
    "highlights" : [ "highlights", "highlights" ],
    "endDate" : "endDate",
    "id" : "id",
    "position" : "position",
    "startDate" : "startDate"
  },
  "company" : "company"
}, {
  "role" : {
    "summary" : "summary",
    "website" : "website",
    "highlights" : [ "highlights", "highlights" ],
    "endDate" : "endDate",
    "id" : "id",
    "position" : "position",
    "startDate" : "startDate"
  },
  "company" : "company"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

