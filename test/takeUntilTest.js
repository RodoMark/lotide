// takeUntilTest.js

const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

// TEST VARIABLES

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];

const results1 = takeUntil(data1, (x) => x < 0);
const results2 = takeUntil(data2, (x) => x === ",");

// TESTS

describe("#takeUntil", () => {
  it("should return the first value < 0 for function (x) => x < 0 (expected: -1)", () => {
    assert.equal(results1, -1);
  });

  it("should return the first value < 0 for function (x) => x === , (expected: ,)", () => {
    assert.equal(results1, -1);
  });
});
