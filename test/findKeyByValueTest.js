const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

// TEST VARIABLES

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {
  it("should return the first key which contains the given value", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("should return undefined if no key contains the given value", () => {
    assert.equal(
      findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
      undefined
    );
  });
});
