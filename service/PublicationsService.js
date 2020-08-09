'use strict';


/**
 * Your GET endpoint
 * Get publication details
 *
 * id String 
 * returns List
 **/
exports.getPublicationsId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "summary" : "summary",
  "website" : "website",
  "releaseDate" : "releaseDate",
  "name" : "name",
  "publisher" : "publisher",
  "id" : "id"
}, {
  "summary" : "summary",
  "website" : "website",
  "releaseDate" : "releaseDate",
  "name" : "name",
  "publisher" : "publisher",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

