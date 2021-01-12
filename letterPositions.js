"use strict";

// letterPositions.js

const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function (sentence) {
  const results = {};
  //Lowercase and remove all the spaces
  const lowerCase = sentence.toLowerCase().replace(/\s/g, "");

  // These are characters we don't need
  const nonLetters = [" ", ",", ".", "?", "!", "(", ")"];

  //Loop over each letter
  for (let i = 0; i < lowerCase.length; i++) {
    //If it's already in the object then add the index [i] to the array
    if (results[lowerCase[i]]) {
      results[lowerCase[i]].push(i);

      //If it doesn't exist in the object, create an array and put the index [i] into it
    } else {
      results[lowerCase[i]] = [];
      results[lowerCase[i]].push(i);
    }
  }

  //Remove all of the non-letter characters
  for (const character of nonLetters) {
    delete results[character];
  }

  return results;
};

module.exports = letterPositions;
