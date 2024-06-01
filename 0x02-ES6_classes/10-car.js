export default class Car {
  constructor(brand, color, model) {
    this._brand = brand;
    this._color = color;
    this._model = model;
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
    return this._model;
  }

  set model(value) {
    this._model = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
