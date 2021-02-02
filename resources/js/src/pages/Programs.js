import React from 'react'
import Search from "../components/Search";

const Programs = () => {
    return (
        <React.Fragment>
            <Search/>
            <div className="programs">
                <div className="programs__head">
                    <span className="programs__name programs__column">Название</span>
                    <span className="programs__status programs__column">Статус</span>
                </div>
                <ul className="programs__list list">
                    <li className="list__item item">
                        <a href="#" className="item__link">
                            <span className="item__name programs__column">ERVA.467444.010</span>
                            <span className="item__status programs__column">0</span>
                        </a>
                    </li>
                    <li className="list__item item">
                        <a href="#" className="item__link">
                            <span className="item__name programs__column">ERVA.467444.010</span>
                            <span className="item__status programs__column">0</span>
                        </a>
                    </li>
                    <li className="list__item item">
                        <a href="#" className="item__link">
                            <span className="item__name programs__column">ERVA.467444.010</span>
                            <span className="item__status programs__column">0</span>
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>

    )
}

export default Programs
