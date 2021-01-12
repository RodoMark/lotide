"use strict";

const flatten = function (array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      flattenedArray.push(array[i][j]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;
