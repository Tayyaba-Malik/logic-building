    //                            Question #1
// Sum of Two Numbers
// Write a function sum(a, b) that takes two numbers as arguments and returns their 
// sum.
// Example: sum(3, 4) should return 7

function sum(a,b) {
    let result= (a + b)
    return result
}
let result = sum (3,4)
console.log =(result);
  
//                                 Question#2
// Check Even or Odd
// Write a function isEven(n) that returns true if the number n is even, and false if it's 
// odd.

function isEven(n) {
    return n % 2 === 0;
  }
  console.log(isEven(4)); 
  console.log(isEven(3));
  console.log(isEven(10)); 
  console.log(isEven(11)); 

//                                 Question#3
//   3. Maximum of Three Numbers
// Write a function maxOfThree(a, b, c) that takes three numbers and returns the 
// largest of the three.

function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  }
  console.log(maxOfThree(1, 2, 3)); 
console.log(maxOfThree(5, 3, 1)); 
console.log(maxOfThree(2, 2, 2)); 
//                                  Question#4
// Reverse an Array
// Write a function reverseArray(arr) that takes an array and returns a new array with 
// the elements in reverse order.

function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
//                                  Question#5
//   Write a function factorial(n) that takes a non-negative integer n and returns its 
//   factorial.

  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
//                                  Question#6
//   Write a function countVowels(str) that takes a string and returns the number of 
//   vowels (a, e, i, o, u) in it.

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
      }
    }
    return count;
  }
  console.log(countVowels('hello world')); 
  console.log(countVowels('aeiou')); 
  console.log(countVowels('bcdfghjklmnpqrstvwxyz')); 

//                                   Question#7
//   Write a function removeDuplicates(arr) that takes an array and returns a new array 
//   with duplicates removed.
//   Example: removeDuplicates([1, 2, 2, 3, 4, 4]) should return [1, 2, 3, 4]

  function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }

//                                    Question#8
//   Write a function sumArray(arr) that takes an array of numbers and returns the sum 
// of all the elements

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
//                                     Question#9
//   Write a function celsiusToFahrenheit(c) that converts Celsius to Fahrenheit using the 
// formula F = C * 9/5 + 32.


function celsiusToFahrenheit(c) {
    return c * 9/5 + 32;
  }
  
  // Example usage:
  console.log(celsiusToFahrenheit(0)); 
  console.log(celsiusToFahrenheit(100)); 
  console.log(celsiusToFahrenheit(25)); 
//                                        Question#10
//   Write a function isPrime(n) that returns true if n is a prime number and false otherwise.
// Example: isPrime(7) should return true

function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(7)); 
console.log(isPrime(6)); 
console.log(isPrime(23)); 
console.log(isPrime(42)); 