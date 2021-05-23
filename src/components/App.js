import React from 'react'
import Login from './Login.js'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'

class App extends React.Component {

    // every time component mounts, going to check for current user
    // sends fetch request to backend
    componentDidMount() {
        getCurrentUser()
    }

    render() {
        return ( 
            <Login/>
        )
    }
}

export default connect(null, { getCurrentUser })(App)