"use strict";
// Section4, Working with Objects
/**
 * We do not want this behavior because the variable `car` can be assigned to other types.
 */
let car = {
    brand: "BMW",
    color: "Black",
};
car = [];
car = () => { };
//End
/**
 * This is how we want to write it—with strict typing.
 */
let newCar = {
    brand: "Audi",
    color: "white",
};
