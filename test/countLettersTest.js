const assert = require("chai").assert;
const countLetters = require("../countLetters");

// countLettersTest.js

describe("#countLetters", () => {
  it("should return 3 h's for 'Hello from the other siiiiiiide!'", () => {
    const string = "Hello from the other siiiiiiide!";
    const counter = countLetters(string);
    assert.equal(counter.h, 3);
  });

  it("should return 7 i's for 'Hello from the other siiiiiiide!'", () => {
    const string = "Hello from the other siiiiiiide!";
    const counter = countLetters(string);
    assert.equal(counter.i, 7);
  });

  it("should return 0 for no input", () => {
    const string = "";
    const counter = countLetters(string);
    assert.equal(counter, 0);
  });
});
