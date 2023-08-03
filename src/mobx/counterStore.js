import { makeAutoObservable  } from "mobx";

export default class CounterStore {
    count = 0;

    constructor() {
        makeAutoObservable(this)
    }

    get countValue() {
        return this.count
    }

    increment() {
        this.count += 1
    }

    decrement() {
        this.count -= 1
    }

    customValue(number) {
        this.count = +number
    }
}