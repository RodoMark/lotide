"use strict";

const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected)
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {
  // If the arrays are different lengths they're not identical
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    // If there's ever an inequality the whole thing is false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  //If the lengths of the objects' keys aren't the same they're not identical
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  //Looping over the object keys
  for (let key of Object.keys(object1)) {
    // If the value is an array and the arrays aren't the same they're not identical
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
      // If the value is a primitive value and the values aren't the same they're not identical
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }

  //Otherwise the arrays are identical
  return true;

  // console.log("numKeys1: ", numKeys1, "numKeys2: ", numKeys2);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

const boy = { age: "young", sex: "male", responsibility: "few" };
const man = { age: "mature", sex: "male", responsibility: "lots" };
const man2 = { age: "mature", sex: "male", responsibility: "lots" };

assertEqual(eqObjects(man, man2), true);
assertEqual(eqObjects(boy, man), false);
