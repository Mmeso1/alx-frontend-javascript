import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (value < 0) {
      throw new Error('Sqft must be non-negative.');
    }
    this._sqft = value;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (value < 1) {
      throw new Error('Floors must be at least 1.');
    }
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
