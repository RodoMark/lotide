"use strict";

const assertEqual = require("./assertEqual");

const countLetters = function (string) {
  if (string === "") return 0;

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

module.exports = countLetters;
