// Section3, "unknown" Type

function multiplyByTwo(number: unknown) {
  if (typeof number === "number") {
    // You need to provide initial checking in order to work with unknown type
    return number * 2;
  }

  return "Please provide a valid number!";
}

console.log(multiplyByTwo(2));
