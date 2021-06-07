import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Landing from '../landing/landing'
import Register from '../authentication/register/Register'
import LogIn from '../authentication/login/LogIn'
import createTicket from '../createTicket/createTicket'
function router() {
    return (
        <div>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/LogIn" component={LogIn}/>
            <Route exact path="/createTicket" component={createTicket}/>
        </div>
    )
}

export default router
