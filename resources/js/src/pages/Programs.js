import React from 'react'
import Search from "../components/search"
import Program from "../components/program";
import {observer} from "mobx-react-lite"
import ProgramsStore from "../store/ProgramsStore"
import CounterStore from "../store/CounterStore"
import {Link} from "react-router-dom"

const Programs = observer(() => {
        // const fetchPrograms = ProgramsStore.fetchPrograms
        // const programs = ProgramsStore.programs

        return (
            <React.Fragment>
                <Search/>
                <button onClick={() => ProgramsStore.fetchPrograms()}>Fetch</button>
                <div className="programs">
                    <div className="programs__head">
                        <span className="programs__name programs__column">Название</span>
                        <span className="programs__status programs__column">Статус</span>
                    </div>
                    <ul className="programs__list list">
                        {
                            ProgramsStore.programs.map(item =>
                                <li className="list__item item" key={item.id}>
                                    <Link to={'/programs/' + item.id} className="item__link">
                                        <span className="item__name programs__column">{item.name}</span>
                                        <span className="item__status programs__column">{item.id}</span>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </React.Fragment>

        )
    }
)

export default Programs
