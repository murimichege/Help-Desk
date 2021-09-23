import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux'
import store from '../src/redux/store'
import Landing from '../src/landing/landing'
import Register from '../src/authentication/register/Register'
import LogIn from '../src/authentication/login/LogIn'
import createTicket from '../src/createTicket/createTicket'
import Privateroute from './privateroutes/privateroute';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser, LogOutUser } from '../src/redux/authAction/authAction';
import Dashboard from './Admin/components/Dashboard/Dashboard'
import Sidebar from './sidebar/sidebar'
export default function App(){

    // Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(LogOutUser());
      // Redirect to login
      window.location.href = "./LogIn";
    }
  }
return(
    
    <Provider store={store}>
    <Router>
      <Sidebar/>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/LogIn" component={LogIn}/>
    <Route exact path="/createTicket" component={createTicket}/>
    <Switch>
        <Privateroute exact path="/Dashboard" component = {Dashboard}/>
    </Switch>
    </Router>
    </Provider>
    
)
};

