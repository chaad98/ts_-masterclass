// Section 4: Intersection Types with Objects

/**
 * The Cat9 type represents a cat with a name, purring behavior, and color.
 */
type Cat9 = {
  name: string;
  purs: boolean;
  color: string;
};

/**
 * The Dog9 type represents a dog with a name, barking behavior, and color.
 */
type Dog9 = {
  name: string;
  barks: boolean;
  color: string;
};

/**
 * HybridAnimal9 is an intersection type that combines both Cat9 and Dog9.
 * This means any object of this type must have **all properties from both types**.
 */
type HybridAnimal9 = Cat9 & Dog9;

/**
 * ✅ This object satisfies all properties required by both Cat9 and Dog9.
 * - name: shared by both types
 * - color: shared by both types
 * - purs: from Cat9
 * - barks: from Dog9
 */
let hybridAnimal9: HybridAnimal9 = {
  name: "Pochi",
  purs: true,
  color: "dark brown and black little spot",
  barks: false,
};
