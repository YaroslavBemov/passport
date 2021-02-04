import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import Programs from './pages/Programs'
import Journal from './pages/Journal'
import Nav from './components/nav'
import Loader from "./components/loader";
import {observer} from "mobx-react-lite";

const App = observer(() => {
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
                        <Route path={'/programs'} exact component={Programs}/>
                        <Route path={'/programs/:id'} component={Journal}/>
                    </Switch>
                </BrowserRouter>
        )
    }
)

export default App
