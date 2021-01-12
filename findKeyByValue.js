"use strict";

const assertEqual = require("./assertEqual");

/*
Implement the function findKeyByValue which takes in an object and a value.
It should scan the object and return the first key which contains the given value.
If no key with that given value is found, then it should return undefined.
*/

const findKeyByValue = function (object, value) {
  //Loop over the keys in the object
  for (let key in object) {
    //If the values at the key in the object contain
    // the asked for value return the key where it was found
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
