// Question 2

// Write a function that takes an array of numbers as an argument and returns the largest number in the array.

// Description:
// You are given an array of numbers. You need to write a function that takes this array as an argument and returns the largest number in the array.

// Complete and fix the existing code:

// ```javascript
numbers = [1, 2, 3, 4, 5];

function findLargestNumber(numbers) {
  console.log(Math.max.apply(null,numbers));
}

findLargestNumber(numbers);
// Expected result: 5
