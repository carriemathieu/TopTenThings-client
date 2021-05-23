import React from 'react'
import Login from './Login.js'
import Logout from './Logout.js'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'


class App extends React.Component {

    // every time component mounts, going to check for current user
    // sends fetch request to backend
    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        return ( 
            this.props.currentUser ? <Logout /> : <Login/>
        )
    }
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps, { getCurrentUser })(App)