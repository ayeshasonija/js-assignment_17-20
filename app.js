// ===================== 01 =========================
var rows = 2;
var cols = 3;

var array = new Array(rows);
for (var i = 0; i < rows; i++) {
    array[i] = new Array(cols);
}
console.log(array);


// ===================== 02 =========================
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(''));
}


// ===================== 03 =========================
for (var i = 1; i <= 10; i++) {
    console.log(i);
}


// ===================== 04 =========================
function printMultiplicationTable(tableNumber, length) {
    console.log(`Multiplication Table of ${tableNumber}`);
    for (var i = 1; i <= length; i++) {
        console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
    }
}

var tableNumber = parseInt(prompt("Enter the number for which you want the multiplication table:"));
var length = parseInt(prompt("Enter the length of the multiplication table:"));

printMultiplicationTable(tableNumber, length);


// ===================== 05 =========================
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// ===================== 06 =========================
//  Counting: 1 to 15
var counting = [];
for (var i = 1; i <= 15; i++) {
    counting.push(i);
}
console.log("Counting:", counting.join(', '));

//  Reverse counting: 10 to 1
var reverseCounting = [];
for (var i = 10; i >= 1; i--) {
    reverseCounting.push(i);
}
console.log("Reverse counting:", reverseCounting.join(', '));

//  Even numbers: 0 to 20
var evenNumbers = [];
for (var i = 0; i <= 20; i += 2) {
    evenNumbers.push(i);
}
console.log("Even:", evenNumbers.join(', '));

//  Odd numbers: 1 to 19
var oddNumbers = [];
for (var i = 1; i <= 19; i += 2) {
    oddNumbers.push(i);
}
console.log("Odd:", oddNumbers.join(', '));

//  Series: 2k, 4k, 6k, ..., 20k
var series = [];
for (var i = 1; i <= 10; i++) {
    series.push(2 * i + 'k');
}
console.log("Series:", series.join(', '));



// ===================== 07 =========================
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem(item) {
    item = item.toLowerCase();
    
    var flag = false;
    for (let i = 0; i < A.length; i++) {
        if (A[i].toLowerCase() === item) {
            flag = true;
            break;
        }
    }
    
    return flag;
}

let userInput = prompt("Enter an item to search:");
let isFound = searchItem(userInput);

if (isFound) {
    console.log(userInput + ` is available in our bakery.`);
} else {
    console.log(userInput + ` is not available in our bakery.`);
}



// ===================== 08 =========================
var A = [24, 53, 78, 91, 12];

var largestNumber = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largestNumber) {
        largestNumber = A[i];
    }
}

console.log("The largest number in the array is:", largestNumber);



// ===================== 09 =========================
var A = [24, 53, 78, 91, 12];

var smallestNumber = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallestNumber) {
        smallestNumber = A[i];
    }
}

console.log("The smallest number in the array is:", smallestNumber);


// ===================== 10 =========================
var multiplesOf5 = [];

for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        multiplesOf5.push(i);
    }
}

console.log(multiplesOf5.join(', '));
