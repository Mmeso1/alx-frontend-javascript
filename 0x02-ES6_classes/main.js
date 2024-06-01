import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log("Tc1", tc1);
console.log("Tc1 instance", tc1 instanceof TestCar);

console.log("Tc2", tc2);
console.log("Tc2 instance", tc2 instanceof TestCar);

console.log(tc1 == tc2);
