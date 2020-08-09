'use strict';


/**
 * Your GET endpoint
 * Get education details
 *
 * id String 
 * returns List
 **/
exports.getEducationId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "area" : "area",
  "courses" : [ "courses", "courses" ],
  "endDate" : "endDate",
  "studyType" : "studyType",
  "gpa" : "gpa",
  "institute" : "institute",
  "id" : "id",
  "startDate" : "startDate"
}, {
  "area" : "area",
  "courses" : [ "courses", "courses" ],
  "endDate" : "endDate",
  "studyType" : "studyType",
  "gpa" : "gpa",
  "institute" : "institute",
  "id" : "id",
  "startDate" : "startDate"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

