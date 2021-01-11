"use strict";

const assertEqual = require("./assertEqual");

const countOnly = function (allItems, itemsToCount) {
  const results = {};

  // Access the values in allItems
  for (const item of allItems) {
    // Add 1 for every instance of array[i] to the appropriate key
    if (itemsToCount[item] === true) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;
