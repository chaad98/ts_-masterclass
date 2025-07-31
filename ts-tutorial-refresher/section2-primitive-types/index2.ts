// Section2, Null and Undefined Types

let user: undefined; // this particular variable is what we call undefined (if you dont assign a value to a variable)
console.log(user);

// let userRole: null; // this will return error as it request for the userRole to have a value before being assigned
// console.log(userRole);

// solution for null, we can do this instead, this is the correct way
let userRole1: null = null;
console.log(userRole1);

// Prove Checking Comparison between two types (null & undefined
console.log(userRole1 === user);
