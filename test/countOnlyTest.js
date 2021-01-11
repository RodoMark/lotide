const assert = require("chai").assert;
const countOnly = require("../countOnly");

// TEST VARIABLES
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const data = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
};

// TESTS

describe("#countOnly", () => {
  it("should return 1 where Jason: true and occurs once", () => {
    const name = countOnly(firstNames, data).Jason;
    assert.deepEqual(name, 1);
  });

  it("should return undefined where Karima: true and never occurs", () => {
    const name = countOnly(firstNames, data).Karima;
    assert.deepEqual(name, undefined);
  });

  it("should return undefined where value is false", () => {
    const name = countOnly(firstNames, data).Agouhanna;
    assert.deepEqual(name, undefined);
  });
});
