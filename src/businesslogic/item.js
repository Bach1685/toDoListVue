export class Item {
  id;
  isDone;
  
  _value;
  get value() {
    return this._value;
  }
  constructor(value, id) {
    this.id = id;
    this._value = value;
    this.isDone = false;
  }
}
