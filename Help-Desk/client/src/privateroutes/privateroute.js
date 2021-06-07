import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {LogInUser} from '../redux/authAction/authAction'

function Privateroute({component: rest, auth, Component}) {
    return (
        <Route
        {...rest} render={props => (
            LogInUser && auth.isAuthenticated === "true" ?  <Component {...props}/>
            : 
          <Redirect to="/LogIn"/>
        )}
        />
    )
}
const mapStateToProps = state => (
    {
        auth: state.auth
    }
)
Privateroute.propTypes = {
    auth: PropTypes.object.isRequired
}
export default connect(mapStateToProps)(Privateroute)
