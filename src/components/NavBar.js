import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Logout from './Logout.js'

// functional component so no "this" -> just props, currentUser destructured from props
const NavBar = ({ currentUser, loggedIn, history }) => {
    // debugger
    return (
        <div className = "navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/lists">All Lists</NavLink>
            <NavLink to="/lists/new">Add List</NavLink>
            {currentUser ? `Welcome ${currentUser.attributes.first_name}` : ""}
            { loggedIn ? <Logout history={history}/> : null }
            {/* add search */}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser: currentUser.data
    }
}

export default withRouter(connect(mapStateToProps)(NavBar))