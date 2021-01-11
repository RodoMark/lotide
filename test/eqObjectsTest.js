// eqObjectsTest.js

const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

// TEST VARIABLES

const boy = { age: "young", sex: "male", responsibility: "few" };
const man = { age: "mature", sex: "male", responsibility: "lots" };
const man2 = { age: "mature", sex: "male", responsibility: "lots" };

// TESTS

describe("#eqObjects", () => {
  it("should return true if object1 deepEqual object2", () => {
    assert.deepEqual(man, man2);
  });

  it("should return false if object1 notDeepEqual object2", () => {
    assert.notDeepEqual(man, boy);
  });
});

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);
// assertEqual(eqObjects(man, man2), true);
// assertEqual(eqObjects(boy, man), false);
