"use strict";

const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected)
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function (string) {
  const results = {};
  // Needs to be lower case so there's only one instance of each letter
  const lowerCase = string.toLowerCase().replace(/\s/g, "");
  // These are characters we don't need
  const nonLetters = [" ", ",", ".", "?", "!", "(", ")"];

  for (const letter of lowerCase) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  // Remove the non-letter characters
  for (const character of nonLetters) {
    delete results[character];
  }
  return results;
};

const result1 = countLetters("Hello from the other siiiiiiide!");

console.log(assertEqual(result1["h"], 3));
console.log(assertEqual(result1["i"], 7));
