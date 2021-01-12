"use strict";

// map.js

const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

// MAP FUNCTION

const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;
