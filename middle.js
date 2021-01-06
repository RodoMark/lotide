"use strict";

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

// I built this function to automate my testing criteria
let sequenceBuilder = function (number, iterator) {
  let array = [];
  for (let i = 0; i < number; i += iterator) array.push(i);
  return array;
};

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
  } else middleArray.push(Math.floor(array.length / 2));
  return middleArray;
};

assertArraysEqual([], middle([1, 2]));
assertArraysEqual([], middle([49, 50]));
assertArraysEqual([2], middle([1, 2, 3, 4, 5]));
assertArraysEqual([2, 3], middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6, 7, 8]));
assertArraysEqual([24, 25], middle(sequenceBuilder(50, 1)));
assertArraysEqual([49], middle(sequenceBuilder(99, 1)));
