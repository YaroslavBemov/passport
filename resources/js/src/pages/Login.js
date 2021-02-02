import React from 'react'

function Login() {
    return (
        <main className="login">
            <form action="" className="login__form">
                <p className="login__text">Привет, как тебя зовут?</p>
                <input className="input login__input" type="text" name="" id="" placeholder="Name" />
                    <input className="input login__input" type="password" name="" id="" placeholder="Password" />
                        <button className="btn login__btn" type="submit">Войти</button>
            </form>
        </main>
    )
}

export default Login
