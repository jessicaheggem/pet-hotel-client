import { combineReducers } from 'redux';
import allPetsReducer from './allPetsReducer'


const rootReducer = combineReducers({
    allPetsReducer,

})

export default rootReducer;