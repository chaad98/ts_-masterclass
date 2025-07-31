// Section5, readonly arrays and tuples

/**
 * Example of a readonly array.
 * Elements cannot be modified after initialization.
 */
let numberIndex4: readonly number[] = [1, 2, 3];
// numberIndex4.push(4) // ❌ Error: Cannot modify a readonly array.

/**
 * Example of a readonly tuple.
 * The tuple elements are fixed in type and position, and cannot be reassigned.
 */
type ReadOnlyTuple = readonly [string, string, number];

/**
 * Using the readonly tuple.
 */
let personIndex4: ReadOnlyTuple = ["John", "Doe", 1];
// personIndex4[0] = 'Mark' // ❌ Error: Cannot modify a readonly tuple.

/**
 * Alternative syntax for readonly arrays and tuples.
 * Both styles are valid; choose whichever you are most comfortable with.
 */

// Array
type aIndex4 = Readonly<(string | number)[]>;
type bIndex4 = ReadonlyArray<string | number>;

// Tuple
type cIndex4 = Readonly<[number, string, number]>;
