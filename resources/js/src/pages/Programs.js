import React, {useEffect} from 'react'
import Search from '../components/search'
import Program from "../components/program";
import {observer} from 'mobx-react-lite'
import ProgramsStore from '../store/ProgramsStore'
import Loader from "../components/loader";


const Programs = observer(() => {

        useEffect(() => {
            ProgramsStore.getPrograms()
        }, [])

        return (
            <React.Fragment>
                <Search/>

                {
                    ProgramsStore.loading
                        ? <Loader/>
                        : <div className="programs">
                            <div className="programs__head">
                                <span className="programs__name programs__column">Название</span>
                                <span className="programs__status programs__column">Статус</span>
                            </div>
                            <ul className="programs__list list">
                                {
                                    ProgramsStore.programs.map(item =>
                                        <Program data={item} key={item.id}/>
                                    )
                                }
                            </ul>
                        </div>
                }
            </React.Fragment>

        )
    }
)

export default Programs
