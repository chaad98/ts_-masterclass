"use strict";
// Section3, Inference, Annotation, Duck Typing and Declaration
// Type  Annotation
let customStrings = "Invoker";
let customNumbers = 1998;
let customDates = new Date();
let customSymbols = Symbol();
////////////////////////////////////////////////////////////
// Example of Type Inference
function addNumbers1(a, b) {
    return a + b;
}
// If you hover your mouse pointer to finalResult variable, it will infererred as number
let finalResult = addNumbers1(10, 15);
let objectA = "Kael";
// End of Duck Typing
////////////////////////////////////////////////////////////
console.log(finalResult);
