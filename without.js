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

const results1 = without([1, 2, 3, 4, 1, 1], [1, 1, 2]);
const results2 = without([1, "cat", 3, "dog", 1, 1], [1, "dog", 2]);
const results3 = without(
  [1, "cat", 3, "dog", 1, 1],
  [1, "cat", 3, "dog", 1, 1]
);

assertArraysEqual(results1, [3, 4]);
assertArraysEqual(results2, ["cat", 3]);
assertArraysEqual(results3, []);
