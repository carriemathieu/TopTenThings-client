import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    user: usersReducer, 
    currentUser,
    loginForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)) )

export default store