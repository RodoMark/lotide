const assert = require("chai").assert;

describe("#assertEqual", () => {
  it("returns true if 1 === 1)", () => {
    assert.isTrue(1 === 1);
  });

  it("returns true if `Lighthouse Labs' === 'Lighthouse Labs'", () => {
    assert.isTrue("Lighthouse Labs" === "Lighthouse Labs");
  });
});
