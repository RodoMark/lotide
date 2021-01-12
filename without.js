"use strict";

const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const without = function (source, itemsToRemove) {
  let arrayWithout = [];
  let dontPush = false;

  if (eqArrays(source, itemsToRemove)) return [];

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        dontPush = true;
        j = itemsToRemove.length;
      } else dontPush = false;
    }
    if (dontPush === false) arrayWithout.push(source[i]);
  }
  return arrayWithout;
};

module.exports = without;
