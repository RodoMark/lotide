"use strict";

const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  //If the lengths of the objects' keys aren't the same they're not identical
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  //Looping over the object keys
  for (let key of Object.keys(object1)) {
    // If the value is an array and the arrays aren't the same they're not identical
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
      // If the value is a primitive value and the values aren't the same they're not identical
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }

  //Otherwise the arrays are identical
  return true;
};

module.exports = eqObjects;
