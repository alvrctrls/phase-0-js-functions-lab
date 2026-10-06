function calculateTax(amount){
    taxValue = amount * 0.1
return taxValue
}

function convertToUpperCase(text){
    return text.convertToUpperCase
}

function findMaximum(num1, num2){
    if (num1 > num2)
        console.log(num1)
    else
        console.log(num2)
}

function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    
    return word === reversedWord;
}

function calculateDiscountedPrice(originalPrice,discountedPercentage){
    discount = discountedPercentage * (1/100)
    discountedPrice = originalPrice * discount
return discountedPrice
}
let originalPrice = 100
let discountPercentage = 20

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };