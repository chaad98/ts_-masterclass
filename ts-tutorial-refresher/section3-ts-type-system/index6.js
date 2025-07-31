"use strict";
// Section3, "Union" Type
let stringOrNumber = 123;
let numberOrUndefined = undefined;
function print(input) {
    if (input) {
        console.log(input);
    }
    else {
        console.log("Input is empty");
    }
}
print();
print("Hello Invoker!");
