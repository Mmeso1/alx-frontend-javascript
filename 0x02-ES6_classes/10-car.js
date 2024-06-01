export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.color = color;
    this.motor = motor;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  get model() {
    return this._motor;
  }

  set model(value) {
    this._motor = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
