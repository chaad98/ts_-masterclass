// Section3, Introduction to TypeSystem

interface ITypeSystems {
  type_one: "any";
  type_two: "unknown";
  type_three: "union";
  type_four: "custom types";
}

function newTypes(iTypeSystems: ITypeSystems): ITypeSystems {
  return {
    type_one: iTypeSystems.type_one,
    type_two: iTypeSystems.type_two,
    type_three: iTypeSystems.type_three,
    type_four: iTypeSystems.type_four,
  };
}

console.log("output here:", JSON.stringify(newTypes, null, 2));
