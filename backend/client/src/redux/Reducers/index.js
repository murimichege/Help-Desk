import {combineReducers} from 'redux'
import authReducer from '../Reducers/authReducer'
import errorReducer from '../Reducers/errorReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer
})
export default rootReducer