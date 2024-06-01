export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code === "string") this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === "string") this._name = name;
  }

  displayFullname() {
    return `${this._name} (${this._code})`;
  }
}
