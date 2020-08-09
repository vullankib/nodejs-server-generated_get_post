'use strict';


/**
 * Your GET endpoint
 * Get awards details
 *
 * id String 
 * returns List
 **/
exports.getAwardsId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "date",
  "summary" : "summary",
  "awarder" : "awarder",
  "id" : "id",
  "title" : "title"
}, {
  "date" : "date",
  "summary" : "summary",
  "awarder" : "awarder",
  "id" : "id",
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

