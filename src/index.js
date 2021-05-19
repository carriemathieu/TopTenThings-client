import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './components/App'
import Login from '/components/Login'

ReactDOM.render(
    <Provider store= {store}>
    <App />
    <Login />, 
    </Provider>,
    document.querySelector('#root')
)