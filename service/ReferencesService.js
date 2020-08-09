'use strict';


/**
 * Your GET endpoint
 * Get reference details
 *
 * id String 
 * returns List
 **/
exports.getReferencesId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "reference" : "reference",
  "name" : "name",
  "id" : "id"
}, {
  "reference" : "reference",
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

