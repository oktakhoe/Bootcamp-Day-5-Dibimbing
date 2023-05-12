// Question 4

// Write a function that takes an array of strings as an argument and returns a new array with the length of each string in the original array.

// Description:
// You are given an array of strings. You need to write a function that takes this array as an argument and returns a new array with the length of each string in the original array.

// Complete and fix the existing code:

// ```javascript
words = ["hello", "world"];

function getLengthsOfStrings(strings) {
  console.log(strings.map((str) => str.length));
}

getLengthsOfStrings(words);
// Expected result: [5, 5]
