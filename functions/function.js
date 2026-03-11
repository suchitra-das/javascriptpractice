// Write a function to add two numbers.
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 4));

// Write a function that checks if a number is even.

function number(i) {
  if (i % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(number(2));

// Create a function that returns the square of a number.

function square(num) {
  return num * num;
}

console.log(square(2));

// Create a function that reverses a string.

function reverses(name) {
  let result = "";

  for (let i = name.length - 1; i >= 0; i--) {
    result += name[i];
  }

  return result;
}

console.log(reverses("suchitra"));

// Create a function that returns the first element of an array.

function array(arr) {
  return arr[0];
}

console.log(array(["suchi", "code", 3, 4]));

// Write a function that returns the last element of an array.
function last(arr) {
  return arr[arr.length - 1];
}

console.log(last(["suchi", "code", 3, 4]));

//Create a function that checks if a string is a palindrome.

function check(a) {
  let result = "";

  for (let i = a.length - 1; i >= 0; i--) {
    result += a[i];
  }

  if (a === result) {
    return true;
  } else {
    return false;
  }
}

console.log(check("sus"));

// Write a function that returns the sum of an array.
function array(num) {
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    result += num[i];
  }

  return result;
}

console.log(array([1, 2, 3, 4, 5]));

// Write a function that counts vowels in a string.

function countVowels(num) {
  let count = 0;
  let vowel = "aeiou";

  for (let i = 0; i < num.length; i++) {
    if (vowel.includes(num[i])) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("Suchitra"));

// Write a function that finds the factorial of a number.

function factorial(num) {
  let result = 1;
  for (i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(4));
console.log(factorial(5));

// Create a function that finds the maximum value in an array.

function maximumNumber(arr) {
  let maxNo = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > maxNo) {
      maxNo = arr[i];
    }
  }
  return maxNo;
}

console.log(maximumNumber([1, 2, 3, 4]));

// Write a function that returns a random number between 1–10.

function random(num) {
  return Math.floor(Math.random() * num);
}

console.log(random(9));

// Create a function that capitalizes the first letter of a word.

function capitalizes(name) {
  let result = name.toUpperCase();

  return result;
}

console.log(capitalizes("suchitra"));

let name = "suchitra";
let str = "";

for (let i = 0; i < name.length; i++) {
  if (i === 0) {
    str += name[i].toUpperCase();
  } else {
    str += name[i];
  }
}

console.log(str);
