// Section3, "any" Type

let firstname: any = "Mark";

firstname = 123;
firstname = [];

function returnParam(param: any) {}

// Best practice to avoid any is to annotate the variable to use specific proper type
// For example:-

let firstNameString: string;

function paramString(firstNameString: string): string {
  return firstNameString;
}

function returnParamString(): string {
  const result = paramString("Hello `any` Type");
  return result;
}

console.log(returnParamString());
