const assert = require("chai").assert;
const tail = require("../tail");

//tailTest.js

describe("#tail", () => {
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
});
