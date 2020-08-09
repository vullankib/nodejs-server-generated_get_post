'use strict';


/**
 * Basic profile Information
 * Basic profile Information
 *
 * id String 
 * returns inline_response_200
 **/
exports.getBasics = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "basics" : {
    "website" : "website",
    "phone" : "phone",
    "name" : "name",
    "id" : "id",
    "label" : "label",
    "picture" : "picture",
    "email" : "email"
  },
  "profiles" : [ {
    "id" : "id",
    "url" : "url",
    "network" : "network",
    "username" : "username"
  }, {
    "id" : "id",
    "url" : "url",
    "network" : "network",
    "username" : "username"
  } ],
  "location" : {
    "address" : "address",
    "city" : "city",
    "postcalCode" : 0.8008281904610115,
    "countryCode" : "countryCode",
    "id" : "id",
    "region" : "region"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

