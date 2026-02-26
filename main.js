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
let evenNum = numbers.filter(nums => nums % 2 === 0);
console.log(evenNum);

// Use the spread operator to merge two arrays, then return the merged array.

