"use strict";
// Section 4, Union Types with Objects
/**
 * This object matches the Dog type completely.
 * ✅ Valid because it has all required Dog properties: name, barks, and wags.
 */
let dog = {
    name: "Husky",
    barks: true,
    wags: true,
};
/**
 * This object matches the Cat type completely.
 * ✅ Valid because it has all required Cat properties: name and purs.
 */
let cat = {
    name: "Pochi",
    purs: true,
};
/**
 * This object includes all properties from both Dog and Cat.
 * ✅ Valid because it matches both types fully — matching one or both is allowed in a union.
 */
let hybridAnimal = {
    name: "Centaur Warrunner",
    barks: true,
    wags: false,
    purs: true,
};
/**
 * ❌ Invalid: This object only partially matches Dog, but not completely.
 * - Missing 'wags', so it doesn’t qualify as a valid Dog.
 * - Also missing 'purs', so it doesn’t qualify as a Cat either.
 * TypeScript throws an error because it matches neither Dog nor Cat fully.
 */
// let partialDog: DogAndCatUnion = {
//     name: "covid_dog",
//     barks: true,
// }
