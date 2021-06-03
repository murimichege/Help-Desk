import {GET_ERRORS} from '../Actiontypes'
const initialstate = {}
const errorReducer = (state = initialstate, action) => {
    switch(action.type){
        case GET_ERRORS:
            return action.payload
            default: 
            return state

    }
}
export default errorReducer