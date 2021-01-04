"use strict";

const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected)
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function (arr) {
  let tailArray = arr;
  if (arr.length > 1) {
    tailArray.shift();
    return tailArray;
  }
  if (arr.length <= 1) return [];
};

// TEST CODE
assertEqual(tail([1, 2, 3]).join(""), [2, 3].join(""));
assertEqual(tail([1, 2, 3]).join(""), [1, 3].join(""));
assertEqual(
  tail(["Hello", "Lighthouse", "Labs"]).join(""),
  ["Lighthouse", "Labs"].join("")
);
assertEqual(
  tail(["Hello", "Lighthouse", "Labs"]).join(""),
  ["Hello", "Lighthouse"].join("")
);
assertEqual(tail([]).join(""), [].join(""));
assertEqual(tail(["Hello"]).join(""), "Hello");
