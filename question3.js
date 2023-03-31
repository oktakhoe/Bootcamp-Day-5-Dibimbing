// Question 3

// Write a function that takes an array of numbers as an argument and returns a new array with only the even numbers from the original array.

// Description:
// You are given an array of numbers. You need to write a function that takes this array as an argument and returns a new array with only the even numbers from the original array.

// Complete and fix the existing code:

// ```javascript
numbers = [1,2,3,4,5]

function filterEvenNumbers(numbers) {
  let evenNumbers = [];
  
  console.log(numbers.filter(x => x % 2 === 0))
  return evenNumbers;
}

filterEvenNumbers(numbers)
// Expected result: [2,4]