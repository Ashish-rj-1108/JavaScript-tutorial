"use strict"; // treat all JS code as newer version

// alert( 6 + 6) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Ashish")


let name = "Ashish"
let age = 18
let isLoggedIn = false
let state;  // (If a variable is declared without an initializer, it is assigned the value undefined.)

var x = 42./* This syntax can be used to declare both local and global variables, depending on the execution context. */

let y = 13. /* This syntax can be used to declare a block-scope local variable.*/
/*
A block-scope local variable is a variable that is declared inside a block {} and can only be accessed within that block. It is created when the block is executed and destroyed when the block ends.
*/

// number => 2 to power 53
// bigint
// Number => An integer or floating point number. For example: 42 or 3.14159.
// string => ""
// boolean => true/false
// null => standalone value (A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.))
// undefined => A top-level property whose value is not defined.
// symbol => unique (A data type whose instances are unique and immutable.)


// object =>  This can be anything. Everything in JavaScript is an object and can be stored in a variable. Keep this in mind as you learn.

console.log(typeof undefined); // undefined
console.log(typeof null); // object