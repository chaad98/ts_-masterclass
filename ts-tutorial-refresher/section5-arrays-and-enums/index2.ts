// Section5, Strictly Typing Arrays

let a: number[] = [1, 2, 3]; // recommended to follow best practice when defining strict typing
let b: Array<string> = ["a", "b", "c"]; // just basic for you to know, else we can use `string[]`
let mixedArrays: (string | number | boolean)[] = ["a", 1, true]; // not recommended but this is how you declare union types in array

type Airplane1 = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer1;
  seats: Seats1;
};

type Airplanes1 = Airplane1[];

type Caterer1 = {
  name: string;
  address: string;
  phone: number;
};

type Seats1 = {
  [key: string]: string;
};

let airplane1: Airplanes1 = [
  {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
      name: "Special Food Ltd",
      address: "484, Some Street, New York",
      phone: 7867856751,
    },
    seats: {
      A1: "John Doe",
      A2: "Mark Doe",
      A3: "Sam Doe",
    },
  },
];
