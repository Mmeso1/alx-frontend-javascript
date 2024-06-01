export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  valueOf() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  toString() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }
}
