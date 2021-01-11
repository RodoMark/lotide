const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST CODE
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false); // => false
assertEqual(eqArrays(["1", "2", "cat"], ["1", "2", "cat"]), true); // => true
assertEqual(eqArrays(["1", "2", "cat"], ["1", 2, "cat"]), false); // => false
