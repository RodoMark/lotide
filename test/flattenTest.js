// flattenTest.js

const assert = require("chai").assert;
const flatten = require("../flatten");

const data = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

const result = [1, 2, 3, 4, 5, 6, 7, 8];

describe("#flatten", () => {
  it("should return all nest array values in a single flat array", () => {
    assert.deepEqual(flatten(data), result);
  });

  it("should return empty array [] if input is empty", () => {
    assert.deepEqual(flatten(data), result);
  });
});
