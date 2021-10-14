import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import { logout } from '../actions/currentUser'

const Logout = ({ logout, history }) => {
    return (
        // prevents page refresh, dispatches logout action, routes user to '/' 
        <form onSubmit= {event => {
            event.preventDefault()
            logout()
            history.push('/')
            }
        }>
            <Button variant="outline-light" as="input" type="submit" value="Log Out"/>
        </form>
    )
}

export default connect(null, { logout })(Logout)