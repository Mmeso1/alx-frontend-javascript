import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullname()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (amount && typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (conversionRate && typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
