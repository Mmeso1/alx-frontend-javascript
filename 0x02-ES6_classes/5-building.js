export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
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
}
