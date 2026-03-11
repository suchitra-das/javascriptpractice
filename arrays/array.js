//Create an array of 5 fruits and print all fruits using a loop.

const names = ["shivani", "suchi", "ashish", "sai", "arjun"];

for (i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//Find the length of an array.

let array = ["shivani", "suchi", "ashish", "sai", "arjun"];

let length = 0;

for (let i = 0; i < array.length; i++) {
  length++;
}

console.log(length);

//Add a new element at the end of an array.

let array1 = ["shivani", "suchi", "ashish", "sai", "arjun"];

let array2 = [];

for (let i = 0; i < array1.length; i++) {
  if (array1 !== array2) {
    array2 = [...array1, "alu"];
  }
}

console.log(array2);

// Add a new element at the beginning of an array.

let elm = ["shivani", "suchi", "ashish", "sai", "arjun"];
let result = [];
result.push("sona");
for (let i = 0; i < elm.length; i++) {
  result.push(elm[i]);
}

console.log(result);

//Remove the last element from an array. -

let arrayOne = [1, 2, 3, 4, 5];

for (let i = 0; i < arrayOne.length; i++) {
  arrayOne[arrayOne.length - 1] = "";
}

console.log(arrayOne);

//Remove the first element from an array.

let num = [1, 2, 3, 4, 5];

num.shift();

console.log(num);

// Find if "apple" exists in an array.

let fruit = ["apple", "grapes", "banana"];

for (let i = 0; i < fruit.length; i++) {
  if ("apple" === fruit[i]) {
    console.log("suchi");
  }
}

//Convert an array into a string.

let arrayStr = [1, 2, 3, 4, 5];

let resultSrt = arrayStr.toString();

console.log(typeof resultSrt);

// Reverse an array.

let reverse = [1, 2, 3, 4, 5, 6];

let resultRvs = [];

for (let i = reverse.length - 1; i >= 0; i--) {
  resultRvs.push(reverse[i]);
}

console.log(resultRvs);

// Find the largest number in an array.

let number = [1, 2, 3, 4, 5, 6];

let resultLrg = number[0];

for (let i = 0; i < number.length; i++) {
  if (number[i] > resultLrg) {
    resultLrg = number[i];
  }
}
console.log(resultLrg);

// Find the smallest number in an array.

let numberSml = [1, 2, 3, 4, 5, 6];

let resultSml = numberSml[0];

for (let i = 0; i < numberSml.length; i++) {
  if (numberSml[i] < resultSml) {
    resultSml = numberSml[i];
  }
}
console.log(resultSml);

// Count how many numbers are even in an array.

let numEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let count = 0;

for (let i = 0; i <= numEven.length; i++) {
  if (i % 2 === 0) {
    count++;
  }
}

console.log(count);

// Count how many numbers are odd.

let numOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let countOdd = 0;

for (let i = 0; i <= numOdd.length; i++) {
  if (i % 2 !== 0) {
    countOdd++;
  }
}

console.log(countOdd);

// Create a new array with numbers multiplied by 2.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let multi = [];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] * 2);
  multi.push(nums[i]);
}

// Filter numbers greater than 10.

let greaterNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];

let resultGratet = [];

for (let i = 0; i < greaterNum.length; i++) {
  if (greaterNum[i] > 10) {
    resultGratet.push(greaterNum[i]);
  }
}

console.log(resultGratet);

// Remove duplicate values from an array.

let arrayOrginal = [5, 6, 3, 7, 8, 8, 4, 5];
let ansOne = []; // [5,6,3,7,8,4]

for (let i = 0; i < arrayOrginal.length; i++) {
  let isThere = false;
  for (let j = 0; j < ansOne.length; j++) {
    if (ansOne[j] === arrayOrginal[i]) {
      isThere = true;
      break;
    }
  }

  if (isThere === false) {
    ansOne.push(arrayOrginal[i]);
  }
}

console.log(ansOne);

let dupli = [1, 2, 3, 3, 4, 6, 7, 7];

for (let i = 0; i < dupli.length; i++) {
  for (let j = i + 1; j < dupli.length; j++) {
    if (dupli[i] === dupli[j]) {
    }

    console.log(dupli[i]);
  }
}

console.log(dupli);

// Merge two arrays together.

let employee = ["suchi", "sona"];

let employee2 = ["ashish", "arjun"];

let ans = [];

for (i = 0; i < employee.length; i++) {
  ans.push(employee[i]);
}

for (i = 0; i < employee2.length; i++) {
  ans.push(employee2[i]);
}

console.log(ans);
// Find the sum of all numbers in an array.

let sum = [1, 2, 3, 4, 5];

let resultSum = 0;

for (let i = 0; i < sum.length; i++) {
  resultSum = sum[i] + resultSum;
}

console.log(resultSum);

// Sort numbers in ascending order.

let numAsc = [1, 3, 2, 5, 4, 6, 7, 10];

numAsc.sort((a, b) => a - b);

console.log(numAsc);

// Sort numbers in descending order.

let numDes = [2, 3, 1, 4, 5, 6, 8, 9];

numDes.sort((a, b) => b - a);

console.log(numDes);
