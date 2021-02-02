import React from 'react'

const Journal = () => {
    return (
        <div>
            <div className="program-add">
                <input type="text" className="input chip__input" placeholder="Компонент" />
                    <input type="text" className="input comment__input" placeholder="Комментарий" />
                        <button className="btn add__btn">Добавить</button>
            </div>

            <div className="journal programs">
                <div className="journal__head programs__head">
                    <span className="journal__chip programs__column">Компонент</span>
                    <span className="journal__comment programs__column">Комментарий</span>
                </div>
                <ul className="journal__list list">
                    <li className="list__item item">
                        <div className="item__link">
                            <span className="item__chip programs__column">R35</span>
                            <span className="item__comment programs__column">Маркировка</span>
                        </div>
                        <button className="btn item__done">Done</button>
                        <button className="btn item__edit">Edit</button>
                        <button className="btn item__delet">Delete</button>
                    </li>
                    <li className="list__item item">
                        <div className="item__link">
                            <span className="item__chip programs__column">R35</span>
                            <span className="item__comment programs__column">Маркировка</span>
                        </div>
                        <button className="btn item__done">Done</button>
                        <button className="btn item__edit">Edit</button>
                        <button className="btn item__delet">Delete</button>
                    </li>
                    <li className="list__item item">
                        <div className="item__link">
                            <span className="item__chip programs__column">R35</span>
                            <span className="item__comment programs__column">Маркировка</span>
                        </div>
                        <button className="btn item__done">Done</button>
                        <button className="btn item__edit">Edit</button>
                        <button className="btn item__delet">Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Journal
