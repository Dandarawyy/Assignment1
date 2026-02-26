'use strict';
//1 Convert the string "123" to a number and add 7.
let string="123";
let num=Number(string)+7;
console.log(num);

//2 Check if the given variable is falsy and return "Invalid" if it is.
let variable = 0;
if (variable==false){
    console.log("Invalid");
}
else{
    console.log("Valid");
}

//3 Use for loop to print all numbers between 1 and 10, skipping even numbers using continue.

for (let i=1; i<=10; i++){
    if (i%2==0){
        continue;
    }
    console.log(i); 
}
//4 create an array of number and return only the even numbers by using filter method.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum = numbers.filter(nums=>nums % 2 === 0);
console.log(evenNum);

//5 Use the spread operator to merge two arrays, then return the merged array.

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let mergedArray = [...array1, ...array2];
console.log(mergedArray);

//6 Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).

let day = 8;
switch (day) {
    case 1:         console.log("Sunday");
        break;
    case 2:         console.log("monday");
        break;
    case 3:         console.log("tuesday");
        break;
    case 4:         console.log("wednesday");
        break;
    case 5:         console.log("thursday");
        break;
    case 6:         console.log("friday");
        break;
    case 7:         console.log("saturday");
        break;
    default:        console.log("the week only has 7 days");
    
}

//7 Create an array of strings and return their lengths using map method

let array_str=["a","ab","abc"]

let array_len=array_str.map(str=>str.length);

console.log(array_len);

//8 Write a function that checks if a number is divisible by 3 and 5.

 function divisible(numm){
    if(numm%3===0 && numm%5===0)
    {
        return("Divisble by both");  
    }
    else{
        return("Not divisible");
    }
}
console.log(divisible(15));

//9 Write a function using arrow syntax to return the square of a number

let sqr_num = (num)=>num**2;
console.log(sqr_num(5));

//10 Write a function that destructures an object to extract values and returns a formatted string.

let person ={
    name:"John",
    age:25
    };

console.log(`${person.name} is ${person.age} years old.`);

//11 Write a function that accepts multiple parameters (two or more) and returns their sum.

function sum(...nums){
    let summ=0;
    for(let i=0; i<nums.length; i++){
        summ+=nums[i];
    }
    return summ;
}
console.log(sum(1, 2, 3, 4, 5));

//12 Write a function that returns a promise which resolves after 4 seconds with a 'Success' message.


//13 Write a function to find the largest number in an array.

function largest_num(...nums){
    let largest=nums[0];
    for(let i=0; i<nums.length; i++){
        if(nums[i]>largest){
            largest=nums[i];
        }
    }
    return largest;
}
console.log(largest_num(5,16,24,25,32,4));

//14 Write a function that takes an object and returns an array containing only its keys.

function obj_keys(){
    let obj={
        name:"John",
        age:30 
    };
    return Object.keys(obj);
}
console.log(obj_keys());

//15 Write a function that splits a string into an array of words based on spaces.

function split_str(){
    let str="The quick brown fox";
    let words=str.split(" ");
    return words;
}
console.log(split_str());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q1 What is the difference between forEach and for...of? When would you use each?
    /* ANS: 'forEach' is a method that executes a provided function once for each array element, 
    while 'for...of' is a loop that iterates over iterable objects like arrays and strings. 
    You would use 'forEach' when you want to perform an action on each element of an array, 
    and 'for...of' when you want to iterate over any iterable object.*/

// Q2 What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
    /* ANS: Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase.
    The Temporal Dead Zone (TDZ) is the time between the start of a scope and the point where a variable is declared. During this time, the variable cannot be accessed and will throw a "ReferenceError" if you try to use it.*/

// Q3 What are the main differences between == and ===?
    /* ANS:  "==" checks for equality of value, while "===" checks for both value and type.*/

// Q4 Explain how try-catch works and why it is important in async operations.
    /* ANS: try-catch is a JavaScript construct that allows you to handle errors gracefully. 
    The code inside the try block is executed, and if an error occurs, it is caught by the catch block. 
    This is important in async operations because it allows you to handle errors that may occur during asynchronous tasks without crashing the entire application.*/

// Q5 What’s the difference between type conversion and coercion?
    /* ANS: Type conversion is the explicit conversion of a value from one type to another, 
    while coercion is the implicit conversion of a value from one type to another by JavaScript when it encounters an operation that requires a certain type.*/






