// Intersection types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Also can be:
// interface ElevatedEmployee extends Admin, Employee {}

type ElevatedEmployee = Admin & Employee;

const X: ElevatedEmployee = {
  name: "",
  privileges: ["", ""],
  startDate: new Date(),
};

// Type Guards
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

const result1 = add("Max", "Wein");
result1.split(" "); // error, because result1 can be a number

const result2 = add("Max", "Wein") as string;
result2.split(" "); // ok

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name:" + emp.name);

  if ("privileges" in emp) {
    console.log("Privileges:" + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Privileges:" + emp.startDate);
  }
}

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(2000);
  }
}

// useVehicle(v1);
// useVehicle(v2);

//Descriminated unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  // console.log("Moving at speed " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 20 });

//Type Casting
const paragraph = document.querySelector("p");

// const input1: HTMLElement | null
const input1 = document.getElementById("test-input1");
// Error1: 'input1' is possibly 'null'.
// Errro2: Property 'value' does not exist on type 'HTMLElement'.
// input1.value = "Text";

// const input2: HTMLElement
const input2 = document.getElementById("test-input2")!;
// Error: Property 'value' does not exist on type 'HTMLElement'.ts
// input2.value = "Text";
(input2 as HTMLInputElement).value = "Text";

// const input3: HTMLInputElement
const input3 = document.getElementById("test-input3") as HTMLInputElement;
input3.value = "Hey there!";

// [index: string || number || symbol] - only
// interface ErrorContainer {
//   [index: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "text",
//   username: "text",
//   2: "text",
// };

interface ErrorContainer {
  [index: string]: string | number;

  email: string;
  id: number;
}

const errorBag: ErrorContainer = {
  email: "text",
  username: "text",
  id: 22,
  2: "text",
};
