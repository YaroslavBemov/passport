import React, {useEffect} from 'react'
import {observer} from "mobx-react-lite";
import ProgramsStore from "../store/ProgramsStore";
import Loader from "../components/loader";

const Journal = observer(({match}) => {
        console.log(match)

    useEffect(()=>{
        ProgramsStore.getJournals(match.params.id)
    }, [])

        return (
            <div>
                <div className="program-add">
                    <input type="text" className="input chip__input" placeholder="Компонент"/>
                    <input type="text" className="input comment__input" placeholder="Комментарий"/>
                    <button className="btn add__btn">Добавить</button>
                </div>

                {
                    ProgramsStore.loading
                    ? <Loader/>
                    : <div className="journal programs">
                            <div className="journal__head programs__head">
                                <span className="journal__chip programs__column">Компонент</span>
                                <span className="journal__comment programs__column">Комментарий</span>
                            </div>
                            <ul className="journal__list list">
                                {
                                    ProgramsStore.journals.map(item =>
                                        <li className="list__item item" key={item.id}>
                                            <div className="item__link">
                                                <span className="item__chip programs__column">{item.chip}</span>
                                                <span className="item__comment programs__column">{item.remark}</span>
                                            </div>
                                            <button className="btn item__done">Done</button>
                                            <button className="btn item__edit">Edit</button>
                                            <button className="btn item__delet">Delete</button>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>

                }
            </div>
        )
    }
)

export default Journal
