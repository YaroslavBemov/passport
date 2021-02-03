import {makeAutoObservable} from "mobx"

class ProgramsStore {
    programs = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchPrograms() {
        fetch('http://passport/api/programs')
            .then(response => response.json())
            .then(json => {
                this.programs = [...json]
            })
    }
}

export default new ProgramsStore()
