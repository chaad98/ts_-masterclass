"use strict";
// Section3, "any" Type
let firstname = "Mark";
firstname = 123;
firstname = [];
function returnParam(param) { }
// Best practice to avoid any is to annotate the variable to use specific proper type
// For example:-
let firstNameString;
function paramString(firstNameString) {
    return firstNameString;
}
function returnParamString() {
    const result = paramString("Hello `any` Type");
    return result;
}
console.log(returnParamString());
