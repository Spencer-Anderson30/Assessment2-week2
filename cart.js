///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    },
]

//CODE HERE

const total = cart.reduce((currentTotal, cart) => {
    return cart.price + currentTotal
}, 0)

console.log(total)

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = cart.map(function(elem) {
    return elem.price + (elem.price * elem.tax)
    return elem.price - (elem.price * elem.coupon)
})

console.log(calcFinalPrice)

// need to study more on this concept 

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    const checkout = [
        {
            name: "hamburger"
            price: 4.98
            where: here
            guest: 99
        }
    ]

    // I chose these objects
    Name of the food they ordered
    price of the item 
    where the guest will be eating 
    what number they are so they know when their food is ready 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const checkout = [
    {
        name: "hamburger",
        price: 4.98,
        where: "here",
        guest: 99,
    },
]
 console.log(checkout)
