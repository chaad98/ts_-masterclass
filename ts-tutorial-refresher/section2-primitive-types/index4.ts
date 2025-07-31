// Section2, Symbol type

let id: symbol = Symbol(1234);
console.log("id:", id);

let alphabeticId: symbol = Symbol("id");
console.log("alphabeticId:", alphabeticId);

/**
 * The keyword for '`this` is actually represent the current object'
 * [id] is referencing to the 3rd line of this code file
 * You can write a method for that within object to access the ID, hence `getID` function
 */
let userOne = {
  [id]: "1",

  name: "Test",
  getId() {
    return this[id];
  },
};

/**
 * You cannot access the user.id is because it is a symbol
 * It is not actually the ID property
 * Hence, it creates this illusion as a private
 */
console.log("userName:", userOne.name);
// console.log('userId:', user.id')
console.log("userOne function:", userOne.getId());
