"use strict";
// Section 5: Tuples
/**
 * A tuple is a special type of array in TypeScript.
 * Tuples only exist in TypeScript; they are not available in JavaScript.
 * This might be a new concept for you if you are familiar only with JavaScript.
 *
 * A tuple is simply an array with a fixed shape and fixed length.
 * Normally, arrays do not have a fixed shape or length, but tuples do.
 */
/**
 * This is what we mean by a tuple: an array with a fixed shape and fixed length.
 * In this example, the array strictly requires 3 elements of the specified types.
 * If you try to add another element to the array, TypeScript will throw an error.
 */
let person = ["John", "Doe", 18];
let userTuple = ["Legion", "Commander", 32];
const passingStudents = [3, true]; // 0 string
const passingStudents2 = [3, true, "John"]; // 1 string
const passingStudents3 = [3, true, "John", "Stella"]; // 2 strings
const passingStudents4 = [3, true, "John", "Stella", "Mark"]; // 3 strings
let stringBooleansNumber = ["test", true, false, 32];
let booleansStringNumber = [
    true,
    false,
    true,
    false,
    "testing",
    33,
];
