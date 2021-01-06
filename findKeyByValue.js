"use strict";

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
  return undefined;
};

const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected)
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

findKeyByValue(bestTVShowsByGenre);
