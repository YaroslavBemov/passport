import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import Programs from './pages/Programs'
import Journal from './pages/Journal'
import Nav from './components/Nav'
import Loader from "./components/Loader";

const App = () => {
    const user = true

    return (
        !user ?
            <div>
                <Login/>
                {/*<Loader/>*/}
            </div>
            :
            <BrowserRouter>
                <Nav/>
                <Switch>
                    <Route path={'/programs'} component={Programs}/>
                    <Route path={'/journal'} component={Journal}/>
                </Switch>
            </BrowserRouter>
    )
}

export default App
