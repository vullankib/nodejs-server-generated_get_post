'use strict';


/**
 * Your GET endpoint
 * Get language expertise details
 *
 * id String 
 * returns List
 **/
exports.getLanaguagesId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "fluency" : "fluency",
  "language" : "language",
  "id" : "id"
}, {
  "fluency" : "fluency",
  "language" : "language",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

