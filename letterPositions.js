"use strict";

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

const eqArrays = function (array1, array2) {
  // If the arrays are different lengths they're not identical
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    // If there's ever an inequality the whole thing is false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const result1 = letterPositions("Hello");
const result2 = letterPositions("Hello from the other siiiiiiide!");

assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["l"], [2, 3]);
