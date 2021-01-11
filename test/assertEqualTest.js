const assert = require("chai").assert;
const assertEqual = require("../assertEqual");

describe("#assertEqual", () => {
  it("returns true if 1 === 1)", () => {
    assert.isTrue(1 === 1);
  });

  it("returns true if `Lighthouse Labs' === 'Lighthouse Labs'", () => {
    assert.isTrue("Lighthouse Labs" === "Lighthouse Labs");
  });
});

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 4);
