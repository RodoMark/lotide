"use strict";

const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

// I built this function to automate my testing criteria
const buildSequence = require("./buildSequence");

const middle = function (array) {
  let middleArray = [];
  // If array has no middle return blank array
  if (array.length <= 2) return [];
  // If the array is even
  if (array.length % 2 === 0) {
    // Push the two middle values into a new array
    middleArray.push(Math.floor((array.length - 1) / 2));
    middleArray.push(Math.floor(array.length / 2));
    // If the array is odd push the single middle value
  } else middleArray.push(Math.ceil(array.length / 2));
  return middleArray;
};

module.exports = middle;
