'use strict';


/**
 * Your GET endpoint
 * Get skill details
 *
 * id String 
 * returns List
 **/
exports.getSkillsId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "keywords" : [ "keywords", "keywords" ],
  "level" : "level",
  "name" : "name",
  "id" : "id"
}, {
  "keywords" : [ "keywords", "keywords" ],
  "level" : "level",
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
 * Skill POST endpoint
 * Add skill details
 *
 * body Skills  (optional)
 * id String 
 * no response value expected for this operation
 **/
exports.postSkillsId = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

