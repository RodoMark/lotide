"use strict";

const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected)
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const head = function (array) {
  if (array.length > 0) return array[0];
  if (array.length === 0) return undefined;
};

// // TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head([5, 6, 7]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Goodbye");
assertEqual(head([]), undefined);
assertEqual(head([]), 0);
