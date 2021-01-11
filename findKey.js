"use strict";

// findKey.js

const assertEqual = require("./assertEqual");

const findKey = function (object, callback) {
  //Scan the object and return the first key for which callback returns truthy
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
