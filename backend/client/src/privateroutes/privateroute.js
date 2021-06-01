import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import LogInUser from '../redux/authAction/authAction'
function privateroute({component: rest, auth, Component}) {
    return (
        <Route
        {...rest} render={props => (
            LogInUser && auth ? <Redirect to=""/>

        )}
        
        />
    )
}

export default privateroute
