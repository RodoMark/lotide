# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @alon.codes/lotide`

**Require it:**

`const _ = require('@alon.codes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

### `buildSequence(number, multiple)`:

#### Generates a linear number sequence based on the number of iterations and the multiple,

### `countLetters(string)`

#### Counts the number of times each letter occurs in a string and returns it as an object.

### `countOnly(allItems, itemsToCount)`

#### Takes an array and an object.

- If a key in the object has value `true`, the function counts how many times the key occurs in the array.
- If a key in the object has value `false`, the function ignores the key.

### `eqArrays(array1, array2)`

#### Takes 2 arrays and determines if they're equal to each other.

### `eqObjects(object1, object2)`

#### Takes 2 objects and determines if they're equal to each other.

### `findKey(object, callback)`

#### Scans the object and returns the first key for which the callback function returns truthy.

- If no value with that callback function is found, then it should return undefined.

### `findKeyByValue(object, value)`

#### Scans the object and returns the first key which contains the given value.

- If no key with that given value is found, then it should return undefined.

### `flatten(array)`

#### Takes an array and pushes all of its contents one by one into a new array.

### `head(array)`

#### Returns the first value if the array has values in it.

### `letterPositions(sentence)`

#### Returns the index positions of every letter in a sentence while ignoring spaces and non-letter characters

### `map(array, callback)`

#### Takes an array and transforms its values according to the callback function

### `middle(array)`

#### Finds the middle value of an array.

- If array has odd number of values returns the middle one.
- If array has even number of values returns the two closest to the middle.
- If array has 2 or fewer values, returns blank array [].

### `tail`

#### Returns the values in an array except for the first one.

- Returns a blank array [] if there are fewer than 2 values.

### `takeUntil(array, callback)`

#### Takes an array and a callback and returns the first index value for which the callback function returns true.

### `without(source, itemsToRemove)`

#### Takes an array and returns it without the items you asked to be removed.
