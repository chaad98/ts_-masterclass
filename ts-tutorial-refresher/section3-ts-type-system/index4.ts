// Section3, "alias" Type

// Date;
// Array;
// Map;
// Set;
// Promise;
// RegExp;
// Error;
// Function;
// Symbol;
// WeakMap;
// Symbol;
// WeakSet;

type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = Symbol;

// This is how you define "alias" Type
let customString: CustomString = "Invoker";
let customNumber: CustomNumber = 1998;
let customDate: CustomDate = new Date();
let customSymbol: CustomSymbol = Symbol();

console.log(customString);
console.log(customNumber);
console.log(customDate);
console.log(customSymbol);
