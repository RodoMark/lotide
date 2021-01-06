"use strict";

const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      flattenedArray.push(array[i][j]);
    }
  }
  return flattenedArray;
};

console.log(
  flatten([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
);

console.log(
  flatten([
    [1, "cat", "dog"],
    [3, 4, "mouse", 5, 6, 77777],
    [5, 6, "squirell", "horse"],
    [7, 8, "mountain"],
    ["beluga"],
  ])
);
