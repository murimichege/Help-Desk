import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import store from '../src/redux/store'
import Landing from '../src/landing/landing'
import Register from '../src/authentication/register/Register'
import LogIn from '../src/authentication/login/LogIn'


const App = () => (
    <Provider store={store}>
    <Router>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/LogIn" component={LogIn}/>
    </Router>
    </Provider>
    
    
);

export default App;
