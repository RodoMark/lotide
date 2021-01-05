"use strict";

const assertArraysEqual = function (array1, array2) {
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

  let result = eqArrays(array1, array2);

  if (result === true)
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  if (result === false)
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
};

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2"]); // => false
assertArraysEqual(["1", "2", "cat"], ["1", "2", "cat"]); // => true
assertArraysEqual(["1", "2", "cat"], ["1", 2, "cat"]); // => false
