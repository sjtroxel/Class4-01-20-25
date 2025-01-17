// ** Notes From The Monday, 01/20 Pre-Class Readings **



        // ****BOOLEANS!!!****

// -----------------

// console.log(10 > 5);
// console.log(5 === (2 + 3));
// console.log(7 !== 3);

// -----------------

// Example: "Falsy Values" Example in Action

// const cartQuantity = 0; // 0 is considered a "falsy value"
// if (cartQuantity) {
//     console.log("Cart has items.");
// } else {
//     console.log("Cart is empty.");
// }

// Example: "Truthy Values" Example in Action

// const userName = "Steffan";
// if (userName) {
//     console.log(`Welcome, ${userName}!`); // Output: "Welcome, John!"
// } else {
//     console.log("Please log in.");
// }

// if (0) {
//     console.log("This won't run because 0 is falsy.");
// } else {
//     console.log("0 is considered falsy in JavaScript."); // Output: 0 is considered falsy in JavaScript.
// }

// if ("text") {
//     console.log("This will run because 'text' is truthy."); //Output: This will run because 'text' is truthy.
// }

// -----------------



        // ****IF-STATEMENTS!!!****

// -----------------

// if (condition) {
//     // Code to execute if the condition is TRUE
// }

// let age = 19;
// if (age >= 18) {
//     console.log("You are eligible to vote!");
// } else {
//     console.log("No vote for you! Sorry Charlie!");
// }

// -----------------

// Now, it is time to combine these things?!!

// && means both conditions have to be true, while || means either one or the other of the conditions have to be true but not necessarily both.

// let isLoggedIn = true;
// let hasAccess = false;

// if (isLoggedIn && hasAccess) {
//     console.log("ACCESS GRANTED!");
// } else {
//     console.log("YOU! SHALL! NOT! PASS!");
// }

// const isWeekend = true;
// const isHoliday = false;

// if (isWeekend || isHoliday) {
//     console.log("Woot woot! You can relax today!"); // Output: "You can relax today!" (if either condition is true)
// } else {
//     console.log("You gotta work!!"); // Output: "It's a workday." (if both conditions are false)
// }

// const isLoggedIn = false;

// if (!isLoggedIn) {
//     console.log("Please log in."); // Output: "Please log in."
// } else {
//     console.log("Welcome back!"); // Output: "Welcome back!"
// }

// -----------------

// And now it is time to get crazy with NESTED-IF STATEMENTS!!! 

// const username = "admin";
// const password = "password123";

// Example1
// if (username === "admin") {
//     // Nested check for password...
//     if (password === "password123") {
//         console.log("OPEN SESAME!!"); // i.e. Output: "Access Granted!"
//     } else {
//         console.log("INTRUDER ALERT!! INTRUDER ALERT!!"); // i.e. Output: "Incorrect password."
//     }
// } else {
//     console.log("Unknown user!"); // Output: "Unknown user... uh oh, spaghettios!"
// }

// Example2
// const age = 15;
// const hasLicense = true;
// if (age >= 16) {
//     if (hasLicense) {
//         console.log("You can drive! Be safe!");
//     } else {
//         console.log("You need a valid driver's license to drive! Or you will get in very big trouble if you're caught without one!");
//     }
// } else {
//     console.log("You are a little baby who is too young to drive! Ha! Ha! Ha!");
// }

// -----------------


        // ****FUNCTIONS!! FUNCTIONS!!****

// -----------------

// function functionName(parameters) {
//     // The secret code to execute!!
// }


// Example: Greeting
// function greet(name) {
//     console.log(`Hi-dee ho, ${name}!`);
// }
// greet("Steffan"); // Output: "Hi-dee ho, Steffan!"

// function greet(name = "Strawberry, my cat!") {
//     console.log(`Hello, ${name}!`);
// }
// greet(); // Output: "Hello, Strawberry, my cat!"
// greet("Charlie"); // Output: "Hello, Charlie!"


// Example: Squaring Numbers
// function square(number) {
//     return number * number;
// }
// let result = square(6);
// console.log(result); // Output: 36


// Example: Checking Voting Eligibility
// (Using if-statements within a function - to add **conditional logic**!!)

function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You may be eligible to vote, hurray!!";
    } else {
        return "YOU MAY NOT VOTE, BECAUSE YOU ARE A BABY!";
    }
}
console.log(checkVotingEligibility(19)); // Output: "You may be eligible to vote, hurray!!"
console.log(checkVotingEligibility(11)); // Output: "YOU MAY NOT VOTE, BECAUSE YOU ARE A BABY!"

// -----------------


        // ****WOWZERS!!!!!!!!!!!!****

