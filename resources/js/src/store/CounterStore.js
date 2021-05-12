import {makeAutoObservable} from "mobx"

class CounterStore {
    counter = 0

    constructor() {
        console.log('render')
        makeAutoObservable(this)
    }

    increment() {
        this.counter += 1
        console.log(`counter - ${this.counter}`)
    }

    decrement() {
        this.counter = this.counter - 1
        console.log(`counter - ${this.counter}`)
    }
}

export default new CounterStore()
