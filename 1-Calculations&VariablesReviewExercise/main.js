let originalPrice = 200;
let taxRate = 0.08;
let discountRate = 0.15;

// console.log(`$${originalPrice.toFixed(2)}`);
let discount = originalPrice * discountRate;
let discountedPrice = originalPrice - (originalPrice * discountRate);
// console.log(`$${discountedPrice.toFixed(2)}`);
let tax = discountedPrice * taxRate;
let finalTaxedPrice = discountedPrice + (discountedPrice * taxRate);
// console.log(`$${finalTaxedPrice.toFixed(2)}`);

console.log(`Original Price: $${originalPrice.toFixed(2)}`);
console.log(`Discount: $${discount.toFixed(2)}`);
console.log(`Sales Tax: $${tax.toFixed(2)}`);
console.log(`Final Price: $${finalTaxedPrice.toFixed(2)}`);