import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Landing from '../src/landing/landing'
import {UsersList} from './components/users'
import {TicketsList} from './components/Tickets'
import DashBoard from './components/Dashboard'
import {Analytics} from './components/Analytics'
import {Categories} from './components/Categories'
import {Status} from './components/Statuses' 

import Register from '../src/authentication/register/Register'
import LogIn from '../src/authentication/login/LogIn'


const App = () => (
    <Router>
        <Route exact path="/" component={Landing}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/LogIn" component={LogIn}/>

    </Router>
    
);

export default App;
