import {makeAutoObservable} from 'mobx'
import axios from 'axios'

class ProgramsStore {
    programs = []
    program = {}
    journals = []
    loading = false

    constructor() {
        makeAutoObservable(this)
    }

    getPrograms = async () => {
        this.loading = true
        const response = await axios('http://passport/api/programs')
        this.programs = [...response.data]
        this.loading = false
    }

    getProgram = async id => {
        const response = await axios('http://passport/api/programs/' + id)
        this.program = {...response.data}
    }

    getJournals = async id => {
        this.loading = true
        this.journals = []
        const response = await axios('http://passport/api/journals/' + id)
        this.journals = [...response.data]
        this.loading = false
    }

    setProgram = async name => {
        await axios.post('http://passport/api/programs', {name: name})
            .then(response => console.log(response))
            .catch(e => console.log(e))
    }
}

export default new ProgramsStore()
