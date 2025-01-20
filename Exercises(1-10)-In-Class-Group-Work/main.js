

                // *In-Class Exercises (01/20/2025)


        1
// let value1 = 0;
// if (value1 == false) {
//         console.log("falsy!")
// } else {
//         console.log("truthy!")
// }
// let value2 = "";
// if (value2 == false) {
//         console.log("falsy!")
// } else {
//         console.log("truthy!")
// }
// let value3 = "Hello";
// if (value3 == false) {
//         console.log("falsy!")
// } else {
//         console.log("truthy!")
// }
// let value4 = 42;
// if (value4 == false) {
//         console.log("falsy!")
// } else {
//         console.log("truthy!")
// }
// let value = null;
// if (value == true) {
//         console.log("falsy!")
// } else {
//         console.log("truthy!")
// }
// console.log(Boolean(0)); // Output: falsy
// console.log(Boolean("")); // Output: falsy
// console.log(Boolean("Hello")); // Output: truthy
// console.log(Boolean(42)); // Output: truthy
// console.log(Boolean(NaN)); // Output: falsy

// ***


        2
// function checkVotingEligibility (age) {
//         if (age >= 18) {
//             return "You may be eligible to vote!";
//         } else {
//             return "You may not vote until you are 18 years old, sorry!";
//         }
//     }
//     console.log(checkVotingEligibility(19)); // Output: "You may be eligible to vote!"
//     console.log(checkVotingEligibility(11)); // Output: "You may not vote until you are 18 years old, sorry!"

// ***


        3 
// function calculateFinalPrice (originalPrice, discountRate = 0.2, taxRate = 0.08) {
//                 const discount = originalPrice * discountRate;
//                 const discountedPrice = originalPrice - discount;
//                 const tax = discountedPrice * taxRate;
//                 const finalPrice = discountedPrice + tax;
//                 console.log(`Original Price: $${originalPrice}`);
//                 console.log(`Discount: $${discount.toFixed(2)}`);
//                 console.log(`Tax: $${tax.toFixed(2)}`);
//                 console.log(`Final Price: $${finalPrice.toFixed(2)}`);
//         }

// calculateFinalPrice(150);

// ***


        4
// let username = "admin"
// let password = "Password123"

// if (username === "admin" && password === "Password123") {
//         console.log("Access Granted!")
// } else { 
// if (username === "admin" && password !== "Password123") {
//         console.log("Incorrect Password!")
// } else {
//         console.log("Unknown user!")
// }
// }

// ***


        5
// const age = 18;
// const hasLicense = false;
// if (age >= 16) {
//     if (hasLicense) {
//         console.log("You can drive! Be safe!");
//     } else {
//         console.log("You need a valid driver's license to drive!");
//     }
// } else {
//     console.log("You are too young to get a driver's license!");
// }

// ***


        6
// let isWeekend = true;
// let isHoliday = false;

// if (isWeekend || isHoliday) {
//     console.log("You can relax today!"); // Output: "You can relax today!"
// } else {
//     console.log("It's a workday."); // Output: "Go to work!!"
// }

// ***


        7
// const name = prompt("What is your name?");
// function greet(name) {
//         console.log(`Hello, ${name}! Welcome to JavaScript Class!`);
// }

// greet(name); 

// ***


        8
// function square(number) {
//         const square = number * number;
//         console.log(square);
// }

// square(5);
// square(7);
// square(10);

// ***


        9
// function calculateDiscount (price, discountRate = 0.1) {
//         const discount = price * discountRate;
//         const finalPrice = price - discount;
//         console.log(`Discount: $${discount.toFixed(2)}`);
//         console.log(`Final Price: $${finalPrice.toFixed(2)}`)
// }

// calculateDiscount (100);
// calculateDiscount (200, 0.2);

// ***


        10
function calculateFinalPrice (price, discountRate = 0.15, taxRate = 0.08) {
        const discount = price * discountRate;
        const discountedPrice = price - discount;
        const tax = discountedPrice * taxRate;
        const finalPrice = discountedPrice + tax;
        console.log(`Original Price: $${price.toFixed(2)}`);
        console.log(`Discount: $${discount.toFixed(2)}`);
        console.log(`Tax: $${tax.toFixed(2)}`);
        console.log(`Final Price: $${finalPrice.toFixed(2)}`);
}

calculateFinalPrice (100);
calculateFinalPrice (250, 0.2, 0.1);