import { Item } from "./item";

export class List {
  _items;
  get items() {
    return this._items;
  }
  get toDoItems() {
    return this._items.filter((item) => !item.isDone);
  }
  get doneItems() {
    return this._items.filter((item) => item.isDone);
  }

  id;

  constructor() {
    this.id = 0;
    this._items = [];
    this.add("Выпить суп");
    this.add("Выпить камень");
    this.add("камень я не дам");
    this.mark(1);
  }

  add(text) {
    this._items.push(new Item(text, this.id));
    this.id++;
  }

  remove(id) {
    let removedItemIndex = this._items.findIndex((item) => {
      return item.id == id;
    });
    this._items.splice(removedItemIndex, 1);
  }

  mark(id) {
    let item = this._items.find((item) => {
      return item.id == id;
    });
   
    item.isDone = true;
  }
}
