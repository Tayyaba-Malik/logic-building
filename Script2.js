
// • Question: Create an object named car with properties make, model, and year. How would 
// you access and print the model of the car?

let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2022
  };
  console.log(car.model); 
  console.log(car['model']); 

//   Question: Given an array of numbers, write a for loop that prints each number in the array
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Question: Write a function that takes an array of numbers as an argument and returns the 
// sum of all elements in the array.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
//   Question: How would you create a new Date object in JavaScript and extract the current year 
//   from it?
let currentDate = new Date();
let currentYear = currentDate.getFullYear(); 
console.log(currentYear); 

// • Question: Write a function that takes a number as an argument and returns "Positive" if the 
// number is greater than 0, "Negative" if the number is less than 0, and "Zero" if the number is 
// 0.
function checkNumberSign(num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
//   Question: Write a while loop that prints numbers from 1 to 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Question: Write a function that calculates the square root of a number using JavaScript's 
// Math object.
function calculateSquareRoot(num) {
    return Math.sqrt(num);
  }
  console.log(calculateSquareRoot(16)); 
console.log(calculateSquareRoot(25));  
console.log(calculateSquareRoot(36));  

// Question: Write a function that takes an array of numbers and returns a new array 
// containing only the even numbers.

function getEvenNumbers(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
    return evenNumbers;
  }
//   Question: Create a function that multiplies two numbers. If the second number is not 
// provided, it should default to 10.

function multiply(a, b = 10) {
    return a * b;
  }
  console.log(multiply(5));
  console.log(multiply(5, 2)); 

  
//   Question: Create an object calculator with methods add, subtract, multiply, and divide. Each 
//   method should take two numbers as arguments and return the result of the corresponding 
//   operation.

const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero!");
      }
      return a / b;
    }
  };
  console.log(calculator.add(2, 3)); 
  console.log(calculator.subtract(5, 2)); 
  console.log(calculator.multiply(4, 5)); 
  console.log(calculator.divide(10, 2)); 


//   Question: Write a function that checks a student's grade and returns "A" for marks above 90, 
// "B" for marks between 80 and 90, "C" for marks between 70 and 80, and "F" for marks below 
// 70.
function getGrade(marks) {
    if (marks > 90) {
      return "A";
    } else if (marks >= 80 && marks <= 90) {
      return "B";
    } else if (marks >= 70 && marks <= 80) {
      return "C";
    } else {
      return "F";
    }
  }
console.log(getGrade(92)); 
console.log(getGrade(85)); 
console.log(getGrade(75)); 
console.log(getGrade(60)); 


// Question: Write a for loop that iterates through an array of numbers and breaks the loop 
// when it encounters the number 5.

const number = [1, 2, 3, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    break;
  }
  console.log(numbers[i]);
}

// Question: Write a function that takes two dates as arguments and returns true if the first 
// date is earlier than the second date.

function isEarlierDate(date1, date2) {
    return date1.getTime() < date2.getTime();
  }
  const date1 = new Date('2022-01-01');
const date2 = new Date('2022-01-15');

console.log(isEarlierDate(date1, date2)); 