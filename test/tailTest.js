const tail = require("../tail");
const assertEqual = require("../assertEqual");

// TEST CODE
assertEqual(tail([1, 2, 3]).join(""), [2, 3].join(""));
assertEqual(tail([1, 2, 3]).join(""), [1, 3].join(""));
assertEqual(
  tail(["Hello", "Lighthouse", "Labs"]).join(""),
  ["Lighthouse", "Labs"].join("")
);
assertEqual(
  tail(["Hello", "Lighthouse", "Labs"]).join(""),
  ["Hello", "Lighthouse"].join("")
);
assertEqual(tail([]).join(""), [].join(""));
assertEqual(tail(["Hello"]).join(""), "Hello");
