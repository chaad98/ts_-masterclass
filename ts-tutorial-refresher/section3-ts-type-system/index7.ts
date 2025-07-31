// Section3, Quick Conditional Types

type CustomDate1 = Date;
type CustomString1 = string;

/**
 * NOTES
 * This is not how we want to assign a value to these types, but instead we are assinging to its type
 */
type trueString = CustomString1 extends string ? true : false;
type conditionalNumber = CustomDate1 extends Date ? number : string;
type dateAsssignment = CustomDate1 extends Date ? Date : undefined;
