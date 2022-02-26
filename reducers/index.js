import categoryObject from './categoryObject'
import counter from './counter'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    categoryObject,
    counter
})

export default rootReducer