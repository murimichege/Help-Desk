import axios from 'axios'
import setAuthToken from '../../setAuthToken'
import jwt_decode from 'jwt-decode'

import {GET_ERRORS, SET_CURRENT_USER, USER_LOADING} from '../Actiontypes'

export const registerUser = (history, UserData) => (dispatch) => {
    axios.post('/api/users/register', UserData)
    .then(res => history.push('/LogIn'))
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    )
}

export const LogInUser = (UserData) => dispatch => {
    axios.post('/api/users/LogIn',UserData)
    .then(res => {
        // save to local storage

        const {token} = res.data
        localStorage("jwtToken", token)
        setAuthToken(token)
        // decode the token
        const decoded = jwt_decode(token)
        dispatch(setCurrentUser(decoded))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )


    })

    }

export const setCurrentUser = (decoded) => {
    return{
        type: SET_CURRENT_USER,
        payload: decoded

    }
}

export const UserLoading = () => {
    return{
        type: USER_LOADING  
    }
}

export const LogOutUser = () => dispatch => {
localStorage.removeItem("jwtToken")
setAuthToken(false)
dispatch(setCurrentUser({}))
}