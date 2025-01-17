// ** Exercise: Tax and Discount Calculator **
// Write a function that calculates and returns the final price of an item after applying a discount and tax.


// -----------------


let initialPrice = prompt("What is the initial sticker price of the item?");


function calculateFinalPrice(initialPrice, discountRate = 0.1, taxRate = 0.08) {
                const discount = initialPrice * discountRate; // this calculates the discount to be deducted
                const discountedPrice = initialPrice - discount; // this calculates the price after the discount has been applied
                const tax = discountedPrice * taxRate; // this calculates the amount of sales tax to be added to the discounted price
                const finalPrice = discountedPrice + tax; // this calculates the final price the customer must pay
        console.log(`Original Price: $${initialPrice}`);
        console.log(`Discount: $${discount.toFixed(2)}`);
        console.log(`Tax: $${tax.toFixed(2)}`);
        console.log(`Final Price: $${finalPrice.toFixed(2)}`);
return finalPrice; // this will return the final price, hopefully
}

console.log(`GRAND TOTAL: $${calculateFinalPrice(initialPrice).toFixed(2)}`);

// -----------------


// Post-Exercise Example
// This is a function to update inventory after sales.


// function updateInventory(initialStock, soldItems) {
//         let remainingStock = initialStock - soldItems;
//         return remainingStock >= 0 ? remainingStock : "Stock unavailable, oh no!!";
// }
// console.log(updateInventory(100, 20)); // Output: 80
// console.log(updateInventory(100, 120)); // Output: "Stock unavailable, oh no!!"



// -----------------

                // **And that is the end of the pre-class readings/work for Monday 01/20 class!!**