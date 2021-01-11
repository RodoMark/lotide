const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const sequenceBuilder = require("../sequenceBuilder");

// TEST CODE
assertArraysEqual([], middle([1, 2]));
assertArraysEqual([], middle([49, 50]));
assertArraysEqual([2], middle([1, 2, 3, 4, 5]));
assertArraysEqual([2, 3], middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6, 7, 8]));
assertArraysEqual([24, 25], middle(sequenceBuilder(50, 1)));
assertArraysEqual([49], middle(sequenceBuilder(99, 1)));
