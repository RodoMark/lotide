const assert = require("chai").assert;
const middle = require("../middle");
const buildSequence = require("../buildSequence");

//middleTest.js
describe("#middle", () => {
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [24,25] for Array [1, 2, 3, ..., 50]", () => {
    assert.deepEqual(middle(buildSequence(50, 1)), [24, 25]);
  });

  it("returns [24,25] for Array [1, 2, 3, ..., 50]", () => {
    assert.deepEqual(middle(buildSequence(99, 1)), [50]);
  });
});
