"use strict";
// Section3, Practice: Type System
let citys = "New York"; // string
let population = 8400000; // number
const ages = 32; // 32
let oldAge = 79; // 79
let newAge = oldAge; // 79
let data = new Map(); // Map<any, any>
let score = [90, 86, 100]; // number[]
/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */
// ages = 85;
score.push(10);
// score.push("New Score");
// let customAge: CustomAge = 50;
// let primitive: Primitive = new Date();
let years = [];
