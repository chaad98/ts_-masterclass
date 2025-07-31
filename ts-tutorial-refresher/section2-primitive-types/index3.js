"use strict";
// Section2, BigInt Type
const safeInt = Number.MAX_SAFE_INTEGER;
console.log("safeInt:", safeInt);
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log("safeIntPlusOne:", safeIntPlusOne);
console.log("safeIntPlusTwo:", safeIntPlusTwo);
/**
 * Both BigInt(1234) === 1234n
 * It's just how you declare it, and both of them will be treated as BigInt and display the same output
 */
let bigInt1 = BigInt(1234); // Constructor syntax
let bigInt2 = 1234n; // Literal syntax (more modern idiomatic way of declaring BigInt constants and preferred for hardcoded values)
console.log("bigInt1:", bigInt1);
console.log("bigInt2:", bigInt2);
let c = bigInt1 - bigInt2; // Yes you can use this way to substract the bigInt (eg; additional... etc)
// let d: bigint = 1234.56; // You cannot like this way because BigInt only allow integer value type
/**
 * BigInt is not assignable to parameter type number
 * Whatever a function expects a number, you cannot use BigInt
 * BigInt is a separate primitive type and has no overlap with number
 */
// let f = Math.log(bigInt1)
