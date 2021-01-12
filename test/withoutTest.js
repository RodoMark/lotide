// without.js

const assert = require("chai").assert;
const without = require("../without");
// TEST VARIABLES

const results1 = without([1, 2, 3, 4, 1, 1], [1, 1, 2]);
const results2 = without([1, "cat", 3, "dog", 1, 1], [1, "dog", 2]);
const results3 = without(
  [1, "cat", 3, "dog", 1, 1],
  [1, "cat", 3, "dog", 1, 1]
);

// TESTS

describe("#without", () => {
  it("should return the array without the requested values (expected: [3,4]", () => {
    assert.deepEqual(results1, [3, 4]);
  });

  it("should return the array without the requested values (expected: ['cat',3]", () => {
    assert.deepEqual(results2, ["cat", 3]);
  });

  it("should return an empty array [] when request values match the input array", () => {
    assert.deepEqual(results3, []);
  });
});
