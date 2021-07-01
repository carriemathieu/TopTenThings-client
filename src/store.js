import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import allCategories from './reducers/allCategories'
import allLists from './reducers/allLists'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import listForm from './reducers/listForm'
import signUpForm from './reducers/signUp'
import users from './reducers/users'

const reducer = combineReducers({
    allLists,
    allCategories,
    currentUser,
    listForm,
    loginForm,
    signUpForm,
    users
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)) )

export default store