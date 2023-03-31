// Question 1

// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

// Description:
// You are given an array of numbers. You need to write a function that takes this array as an argument and returns the sum of all the numbers in the array.

// Complete and fix the existing code:

// ```javascript
numbers = [1,2,3,4,5]

function sumArray(numbers) {
  let sum = 0;

  numbers.forEach(item => {
    sum += item
  });

  console.log(sum)
  return sum;
}

sumArray(numbers)
// Expected result: 15