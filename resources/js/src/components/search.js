import React, {useState} from 'react'
import {observer} from "mobx-react-lite";
import ProgramsStore from "../store/ProgramsStore";

const Search = observer(() => {
    const [name, setName] = useState('')

        return (
            <div className="search">
                <input
                    type="text"
                    className="search__input input"
                    placeholder="Название программы"
                    value={name}
                    onChange={(event)=> {
                        setName(event.target.value)
                        console.log(event.target.value)
                    }}
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
