'use strict';
// Convert the string "123" to a number and add 7.
let string="123";
let num=Number(string)+7;
console.log(num);

// Check if the given variable is falsy and return "Invalid" if it is.
let variable = 0;
if (variable==false){
    console.log("Invalid");
}
else{
    console.log("Valid");
}

// Use for loop to print all numbers between 1 and 10, skipping even numbers using continue.

for (let i=1; i<=10; i++){
    if (i%2==0){
        continue;
    }
    console.log(i); 
}
// create an array of number and return only the even numbers by using filter method.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum = numbers.filter(nums=>nums % 2 === 0);
console.log(evenNum);

// Use the spread operator to merge two arrays, then return the merged array.

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let mergedArray = [...array1, ...array2];
console.log(mergedArray);

// Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).

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

// Create an array of strings and return their lengths using map method

let array_str=["a","ab","abc"]

let array_len=array_str.map(str=>str.length);

console.log(array_len);

// Write a function that checks if a number is divisible by 3 and 5.

 function divisible(numm){
    if(numm%3===0 && num%5===0)
    {
        console.log("Divisble by both");  
    }
    else{
        console.log("Not divisible");
    }
}
console.log(divisible(15));

// Write a function using arrow syntax to return the square of a number

let sqr_num = (num)=>num**2;
console.log(sqr_num(5));

// Write a function that destructures an object to extract values and returns a formatted string.

let person ={
    name:"John",
    age:25
    };

console.log(`${person.name} is ${person.age} years old.`);

// Write a function that accepts multiple parameters (two or more) and returns their sum.

function sum(...nums){
    let summ=0;
    for(let i=0; i<nums.length; i++){
        summ+=nums[i];
    }
    return summ;
}
console.log(sum(1, 2, 3, 4, 5));

// Write a function that returns a promise which resolves after 4 seconds with a 'Success' message.


// Write a function to find the largest number in an array.

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