export default class Car {
  constructor(brand, color, model) {
    this._brand = brand;
    this._color = color;
    this._model = model;
  }

  get brand() {
    return this._brand;
  }

  get color() {
    return this._color;
  }

  get model() {
    return this._model;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
