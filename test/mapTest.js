const assert = require("chai").assert;
const map = require("../map");

// TEST VARIABLES
const words = ["ground", "control", "to", "major", "tom"];

const function1 = (word) => word[0];
const function2 = (word) => word.length;
const function3 = (word) => `${word[0]}od`;

const results1 = map(words, function1);
const results2 = map(words, function2);
const results3 = map(words, function3);

describe("#map", () => {
  it("should return first letter for callback (word) => word[0]", () => {
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });

  it("should return word.length for callback (word) => word.length", () => {
    assert.deepEqual(results2, [6, 7, 2, 5, 3]);
  });

  it("should return word + 'od' for callback (word) => word + 'od'", () => {
    assert.deepEqual(results3, ["god", "cod", "tod", "mod", "tod"]);
  });
});
