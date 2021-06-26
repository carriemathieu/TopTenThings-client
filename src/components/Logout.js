import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../actions/currentUser'

const Logout = ({ logout }) => {
    return (
        // prevents page refresh, dispatches logout action, routes user to '/' 
        <form onSubmit= {event => {
            event.preventDefault()
            logout()
            history.push('/')
            }
        }>
            <input type="submit" value="Log Out"/>
        </form>
    )
}

export default connect(null, { logout })(Logout)