// Question 7

// Write a function that takes an array of strings as an argument and returns a new array with only the strings that start with the letter "a".

// Description:
// You are given an array of strings. You need to write a function that takes this array as an argument and returns a new array with only the strings that start with the letter "a".

// Complete and fix the existing code:

// ```javascript
words = ["apple", "banana", "avocado"];

function filterStringsStartingWithA(strings) {
  const startWithA = strings.filter((str) => str.startsWith("a"));
  console.log(startWithA);
}

filterStringsStartingWithA(words);
// Expected result: ["apple", "avocado"]
