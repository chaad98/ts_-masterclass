// Section3, "Union" Type

type StringOrNumber = string | number;
type NumberOrUndefined = number | undefined;
type StringNumberOrUndefined = string | number | undefined;
type DateOrUndefined = Date | undefined;

let stringOrNumber: StringOrNumber = 123;
let numberOrUndefined: NumberOrUndefined = undefined;

function print(input: string) {
  if (input) {
    console.log(input);
  } else {
    console.log("Input is empty");
  }
}

print();
print("Hello Invoker!");
