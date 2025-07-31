"use strict";
// Section3, Introduction to TypeSystem
function newTypes(iTypeSystems) {
    return {
        type_one: iTypeSystems.type_one,
        type_two: iTypeSystems.type_two,
        type_three: iTypeSystems.type_three,
        type_four: iTypeSystems.type_four,
    };
}
console.log("output here:", JSON.stringify(newTypes, null, 2));
