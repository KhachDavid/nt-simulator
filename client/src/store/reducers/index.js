import { combineReducers } from 'redux'
import nationReducer from './nation.reducer'

export default combineReducers({
    // Add reducers here
    nation: nationReducer,
})