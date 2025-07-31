// Section 4, Union Types with Objects

/**
 * The Dog type defines a dog with a name, and two boolean behaviors: barks and wags.
 */
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

/**
 * The Cat type defines a cat with a name and a boolean property purs (purring).
 */
type Cat = {
  name: string;
  purs: boolean;
};

/**
 * This union type allows a value to be either a Dog or a Cat.
 * The object must match the full structure of at least one of the types.
 */
type DogAndCatUnion = Dog | Cat;

/**
 * This object matches the Dog type completely.
 * ✅ Valid because it has all required Dog properties: name, barks, and wags.
 */
let dog: DogAndCatUnion = {
  name: "Husky",
  barks: true,
  wags: true,
};

/**
 * This object matches the Cat type completely.
 * ✅ Valid because it has all required Cat properties: name and purs.
 */
let cat: DogAndCatUnion = {
  name: "Pochi",
  purs: true,
};

/**
 * This object includes all properties from both Dog and Cat.
 * ✅ Valid because it matches both types fully — matching one or both is allowed in a union.
 */
let hybridAnimal: DogAndCatUnion = {
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
