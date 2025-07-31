// Section3, Practice: Type System

let citys = "New York"; // string
let population = 8400000; // number
const ages = 32; // 32
let oldAge = 79 as const; // 79
let newAge = oldAge; // 79
let data = new Map(); // Map<any, any>
let score = [90, 86, 100]; // number[]
type Primitive = string | number | boolean; // string | number | boolean
type CustomName = "John" extends string ? string : "John"; // string
type CustomAge = typeof newAge extends number ? 79 : number; // 79
type CheckData = typeof data extends Object ? true : false; // boolean
type CheckScore = typeof score extends never ? {} : []; // []

/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */

// ages = 85;
score.push(10);
// score.push("New Score");
// let customAge: CustomAge = 50;
// let primitive: Primitive = new Date();
let years: CheckScore = [];
