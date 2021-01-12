// letterPositionsTest.js

const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

// TEST DATA

describe("#letterPositions", () => {
  it("should return all letter positions of input (expected: 'l', [2,3]", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });

  it("should return undefined if input is doesn't exist", () => {
    assert.deepEqual(letterPositions("hello").a, undefined);
  });

  it("should return undefined if input is doesn't exist", () => {
    assert.deepEqual(letterPositions(""), {});
  });
});
