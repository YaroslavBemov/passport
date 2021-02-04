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

        // const sortByUpdate = (a, b) => {
        //     const bandA = a.updated_at
        //     const bandB = b.updated_at
        //
        //     let comparison = 0
        //     if (bandA > bandB) {
        //         comparison = -1
        //     } else if (bandA < bandB) {
        //         comparison = 1
        //     }
        //     return comparison
        //
        // }

        const progs = ProgramsStore.programsFiltered

        return (
            <React.Fragment>
                <Search/>

                {
                    ProgramsStore.loading
                        ? <Loader/>
                        : <div className="programs">
                            <div className="programs__head">
                                <span className="programs__name programs__column">Название</span>
                                {/*<span className="programs__status programs__column"></span>*/}
                            </div>
                            <ul className="programs__list list">
                                {
                                    progs.map(item =>
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
