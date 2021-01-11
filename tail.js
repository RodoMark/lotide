"use strict";

const assertEqual = require("./assertEqual");

const tail = function (arr) {
  let tailArray = arr;
  if (arr.length > 1) {
    tailArray.shift();
    return tailArray;
  }
  if (arr.length <= 1) return [];
};

module.exports = tail;
