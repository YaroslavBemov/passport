import React, {useState} from 'react'
import {observer} from "mobx-react-lite";
import ProgramsStore from "../store/ProgramsStore";

const Search = observer(() => {
    const [name, setName] = useState('')

    const handleChange = event => {
        setName(event.target.value.toUpperCase().trim())
        console.log(name)
    }

    const handleKeyPress = event => {
        console.log(name)
        if (event.key === 'Enter') {
            const progs = ProgramsStore.programs

            const filtered = progs.filter(prog => {
                return prog.name.toUpperCase().includes(name)
            })

            ProgramsStore.programsFiltered = [...filtered]
        }
    }

        return (
            <div className="search">
                <input
                    type="text"
                    className="search__input input"
                    placeholder="Название программы"
                    value={name}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="search__btn btn"
                    onClick={()=>ProgramsStore.setProgram(name)}
                >Добавить</button>
            </div>
        )
    }
)

export default Search
