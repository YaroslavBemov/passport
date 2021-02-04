import React from 'react'
import {Link} from 'react-router-dom'

const Program = ({data}) => {

    return (
        <li className="list__item item">
            <Link to={'/programs/' + data.id} className="item__link">
                <span className="item__name programs__column">{data.name}</span>
                <span className="item__status programs__column"></span>
            </Link>
        </li>
    )
}

export default Program
