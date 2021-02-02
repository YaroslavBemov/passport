import React from 'react'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar">
            <ul className="nav">
                <li className="nav__item">
                    <Link to={'programs'} className="btn nav__btn">Программы</Link>
                </li>
                <li className="nav__item">
                    <Link to={'journal'} className="btn nav__btn">Журнал</Link>
                </li>
            </ul>
            <div className="user">
                <img src="https://via.placeholder.com/100" alt="" className="user__img" />
                <span className="user__name">И.Фамилия</span>
            </div>
        </nav>
    )
}

export default Nav
