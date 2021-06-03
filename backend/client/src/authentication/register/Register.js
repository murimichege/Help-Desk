import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {Link, withRouter } from 'react-router-dom';
import {registerUser} from '../../redux/authAction/authAction'
import PropTypes from 'prop-types'
import classNames from 'classnames'


function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState({
        password: "",
        showPassword: false
    })
    const [password1, setPassword1] = useState("")
    const [error, setError] = useState("")
    const [isAuthenticated, setisAuthenticated] = useState(false)


const handleSubmit = (event) => {
    alert(name + "was created successfully")
    event.preventDefault()
}
 useEffect(() => {
     if(props.auth.isAuthenticated)
     {
         props.history.push('/createTicket')
     }

 },[])
   
    

const newUser = {
    name: name,
    email: email,
    password: password,
    password1: password1
}
console.log(newUser)


    return(
        <form
        className="w-full max-w-lg m-auto py-10 mt-10 px-10 border"
         onSubmit={handleSubmit}>
            <div className ="form-group">
                <label>
                    Full Name
                </label>

                <input
                type="text"
                className="border-solid border-gray-300 border py-2 px-4 w-full
                rounded text-gray-700"
                autoFocus
                value={name}
                placeholder="name"
                onChange={e => setName(e.target.value)}
                />
            </div>

            <div className = "form-group">
                <label>Email</label>
                <input type="text"
                 className="border-solid border-gray-300 border py-2 px-4 w-full
                 rounded text-gray-700" 
                 placeholder="email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 />
            </div>

            <div className = "form-group">
             <label>Password</label>
                <input type="text" 
                className="border-solid border-gray-300 border py-2 px-4 w-full
                rounded text-gray-700" 
                placeholder="password"
                onChange = {e => setPassword(e.target.value)}
                
                />
            </div>
            <div className = "form-group">
             <label>Confirm Password</label>
                <input type="text"
                 className="border-solid border-gray-300 border py-2 px-4 w-full
                 rounded text-gray-700"
                  placeholder="password"
                  onChange = {e => setPassword1(e.target.value)}
                  />
            </div>
            
            <button
            type="submit"
            className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded">
                Register
            </button>
            <p  className = "text-green">
                Already Registered <Link to="/LogIn">LogIn</Link>
            </p>
        </form>
    )
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    auth:state.auth,
    error: state.error
})

export default connect(
    mapStateToProps,
    {registerUser}
)(withRouter(Register))