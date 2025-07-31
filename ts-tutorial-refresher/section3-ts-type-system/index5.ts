// Section3, Inference, Annotation, Duck Typing and Declaration

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

// Declaration types
type CustomStrings = string;
type CustomNumbers = number;
type CustomDates = Date;
type CustomSymbols = Symbol;

// Type  Annotation
let customStrings: CustomStrings = "Invoker";
let customNumbers: CustomNumbers = 1998;
let customDates: CustomDates = new Date();
let customSymbols: CustomSymbols = Symbol();

////////////////////////////////////////////////////////////

// Example of Type Inference
function addNumbers1(a: number, b: number) {
  return a + b;
}

// If you hover your mouse pointer to finalResult variable, it will infererred as number
let finalResult = addNumbers1(10, 15);
// End of Type Inference

// Example of Duck Typing
type A = string;
let objectA: A = "Kael";
// End of Duck Typing

////////////////////////////////////////////////////////////

console.log(finalResult);
