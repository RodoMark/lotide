"use strict";

// findKey FUNCTION

const findKey = function(object, callback) {
  //Scan the object and return the first key for which callback returns truthy
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected)
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const results1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

assertEqual(results1, "noma");

const results2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars < 2
); // => ""Blue Hill"

assertEqual(results2, "Blue Hill");

const results3 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars > 2
); // => ""Blue Hill"

assertEqual(results3, "Akaleri");

const results4 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars > 3
); // => ""Blue Hill"

assertEqual(results4, undefined);

const results5 = findKey(
  {
    Africa: { countries: 54 },
    Antarctica: { countries: 8 },
    Australia: { countries: 14 },
    Asia: { countries: 48 },
    Europe: { countries: 44 },
    northAmerica: { countries: 23 },
    southAmerica: { countries: 13 },
  },
  (x) => x.countries > 40
); // => ""Africa"

assertEqual(results5, "Africa");

const results6 = findKey(
  {
    Africa: { countries: 54 },
    Antarctica: { countries: 8 },
    Australia: { countries: 14 },
    Asia: { countries: 48 },
    Europe: { countries: 44 },
    northAmerica: { countries: 23 },
    southAmerica: { countries: 13 },
  },
  (x) => x.countries < 10
); // => ""Antarctica"

assertEqual(results6, "Antarctica");
