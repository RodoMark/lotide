const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

// TEST CODE
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2"]); // => false
assertArraysEqual(["1", "2", "cat"], ["1", "2", "cat"]); // => true
assertArraysEqual(["1", "2", "cat"], ["1", 2, "cat"]); // => false
