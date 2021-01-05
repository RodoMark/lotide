"use strict";

const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected)
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {
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

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false); // => false
assertEqual(eqArrays(["1", "2", "cat"], ["1", "2", "cat"]), true); // => true
assertEqual(eqArrays(["1", "2", "cat"], ["1", 2, "cat"]), false); // => false
