import {makeAutoObservable} from 'mobx'
import axios from 'axios'

class ProgramsStore {
    programs = []
    programsFiltered = []
    program = {}
    journals = []
    loading = false

    constructor() {
        makeAutoObservable(this)
    }

    getPrograms = async () => {
        if (this.programs.length === 0) {
            this.loading = true
            const response = await axios('http://passport/api/programs')
            this.programs = [...response.data]
            this.programsFiltered = [...response.data]
            this.loading = false
        }
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
            .then(response => {
                this.programs = [...this.programs, ...response.data]

                // this.programs.push(this.programs).unshift(response.data)

                // this.programs.unshift(response.data)
                // this.programs.unshift({
                //     id: response.data.id,
                //     name,
                //     created_at: response.data.created_at,
                //     updated_at: response.data.updated_at
                // })
            })
            .catch(e => console.log(e))
    }

    setJournal = async (id, chip, remark) => {
        await axios.post('http://passport/api/journals/' + id, {chip, remark})
            .then(response => console.log(response))
            .catch(e => console.log(e))
    }
}

export default new ProgramsStore()
