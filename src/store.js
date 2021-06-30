import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import allLists from './reducers/allLists'
import categories from './reducers/allCategories'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm'
import newListForm from './reducers/newListForm'
import signUpForm from './reducers/signUp'
import users from './reducers/users.js'


const reducer = combineReducers({
    allLists,
    categories,
    currentUser,
    loginForm,
    newListForm,
    signUpForm,
    users
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)) )

export default store