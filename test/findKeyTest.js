const assert = require("chai").assert;
const findKey = require("../findKey");

const data = {
  Africa: { countries: 54 },
  Antarctica: { countries: 8 },
  Australia: { countries: 14 },
  Asia: { countries: 48 },
  Europe: { countries: 44 },
  northAmerica: { countries: 23 },
  southAmerica: { countries: 13 },
};

const callback1 = (x) => x.countries < 10;
const callback2 = (x) => x.countries > 40;

describe("#findKey", () => {
  it("should return first country where (x) => x.countries < 10 is truthy (expected: 'Antartica')", () => {
    const result = findKey(data, callback1);
    assert.deepEqual(result, "Antarctica");
  });

  it("should return first country where (x) => x.countries > 40 is truthy (expected: 'Africa')", () => {
    const result = findKey(data, callback2);
    assert.deepEqual(result, "Africa");
  });
});
