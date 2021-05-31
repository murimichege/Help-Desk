import {SET_CURRENT_USER, USER_LOADING} from '../Actiontypes'

import isEmpty from 'is-empty'

const initialstate = {
    isAuthenticated: false,
    user: {},
    loading: true
}

const authReducer = (state = initialstate, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload

            }
            case USER_LOADING:
                return {
                    ...state,
                    loading: true
                }
    }
     

}

}