// Question 6

// Write a function that takes an array of numbers as an argument and returns the second smallest number in the array.

// Description:
// You are given an array of numbers. You need to write a function that takes this array as an argument and returns the second smallest number in the array.

// Complete and fix the existing code:

// ```javascript
numbers = [1,2,3,4,5]

function findSecondSmallestNumber(numbers) {
  const secondMin = numbers.sort((a,b) => a-b) [1]
  console.log(secondMin)
}

findSecondSmallestNumber(numbers)
// Expected result: 2
