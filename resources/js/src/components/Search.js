import React from 'react'

const Search = () => {
    return (
        <div className="search">
            <input type="text" className="search__input input" placeholder="Название программы" />
                <button className="search__btn btn">Добавить</button>
        </div>
    )
}

export default Search
