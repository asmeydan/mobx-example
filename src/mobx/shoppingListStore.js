import { makeAutoObservable } from "mobx";

export default class shoppingListStore {
  list = [];

  constructor() {
    makeAutoObservable(this);
  }

  addElement(element) {
    this.list.push(element);
    localStorage.setItem("shoppingList", JSON.stringify(this.list));
  }

  deleteElement(element) {
    let index = this.list.indexOf(element);
    this.list.splice(index, 1);
    localStorage.setItem("shoppingList", JSON.stringify(this.list));
  }
  updateList() {
    if (JSON.parse(localStorage.getItem("shoppingList")) == null) {
      localStorage.setItem("shoppingList", JSON.stringify([]));
    }
    this.list = JSON.parse(
      localStorage.getItem("shoppingList")
    );
  }
}
