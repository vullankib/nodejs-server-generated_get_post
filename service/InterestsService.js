'use strict';


/**
 * Your GET endpoint
 * Get interests and hobby details
 *
 * id String 
 * returns List
 **/
exports.getInterestsId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "keywords" : [ "keywords", "keywords" ],
  "name" : "name",
  "id" : "id"
}, {
  "keywords" : [ "keywords", "keywords" ],
  "name" : "name",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Interests POST endpoint
 * Add interests and hobby details
 *
 * body Interests Adding interests and hobby details (optional)
 * id String 
 * no response value expected for this operation
 **/
exports.postUserIdInterests = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

