"use strict";

// takeUntil.js

const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// The function will return a "slice of the array with elements taken from the beginning."
// It should keep going until the callback/predicate returns a truthy value.

const takeUntil = function (array, callback) {
  const output = [];
  for (let item of array) {
    if (callback(item)) {
      output.push(item);
      return output;
    }
  }
};

module.exports = takeUntil;
