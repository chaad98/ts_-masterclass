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
let person: [string, string, number] = ["John", "Doe", 18];

// Example
// "?" stands for optional — this element is not required; you can choose to include it or not.
type UserTuple = [string, string, number, string?];
let userTuple: UserTuple = ["Legion", "Commander", 32];

// Example 2 - Using the Rest Operator in an array
/**
 * The rest operator ("...") allows you to declare that the array can contain **any number (n)** of elements of the specified type at that position.
 * It can only be used once in a tuple. If you try to use more than one rest operator in a tuple, TypeScript will throw an error.
 *
 * The rest operator makes that part of the tuple flexible — it can contain zero, one, or many elements of the specified type.
 */
type ListOfStudents = [number, boolean, ...string[]];
const passingStudents: ListOfStudents = [3, true]; // 0 string
const passingStudents2: ListOfStudents = [3, true, "John"]; // 1 string
const passingStudents3: ListOfStudents = [3, true, "John", "Stella"]; // 2 strings
const passingStudents4: ListOfStudents = [3, true, "John", "Stella", "Mark"]; // 3 strings

// Another example with different types
/**
 * The rest operator can be combined with other types.
 * This example requires:
 * - 1 string at the start,
 * - zero or more boolean values,
 * - and finally, exactly 1 number at the end.
 */
type StringBooleansNumber = [string, ...boolean[], number];
let stringBooleansNumber: StringBooleansNumber = ["test", true, false, 32];

/**
 * Similar example, but the booleans come first:
 * - zero or more booleans first,
 * - followed by exactly 1 string,
 * - and exactly 1 number.
 */
type BooleansStringNumber = [...boolean[], string, number];
let booleansStringNumber: BooleansStringNumber = [
  true,
  false,
  true,
  false,
  "testing",
  33,
];
