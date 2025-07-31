// Section3, Understand Type Hierarchy

// A subtype will always extend the parent type
type check = any extends unknown ? true : false;
type check2 = string extends any ? true : false;
type check3 = number extends any ? true : false;
type check4 = {} extends Object ? true : false;
type check5 = [] extends Object ? true : false;
type check6 = Function extends Object ? true : false;
type check7 = never extends any ? true : false;

// A function declaration
const throwError = (err: string) => {
  throw new Error(err);
};

let myStrings: Object = ["a", "b"];
let myFunc: Function = () => 2;
