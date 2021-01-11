const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("should return true if array1 deepEqual array2", () => {
    const array1 = ["1", "2", "3"];
    const array2 = ["1", "2", "3"];

    assert.deepEqual(array1, array2);
  });

  it("should return false if array1 notDeepEqual array2", () => {
    const array1 = ["1", "2", "3"];
    const array2 = ["1", "2", "cat"];

    assert.notDeepEqual(array1, array2);
  });
});

// // TEST CODE
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false); // => false
// assertEqual(eqArrays(["1", "2", "cat"], ["1", "2", "cat"]), true); // => true
// assertEqual(eqArrays(["1", "2", "cat"], ["1", 2, "cat"]), false); // => false
