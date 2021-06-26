import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Logout from './Logout.js'

// functional component so no "this" -> just props, currentUser destructured from props
const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div className = "Navbar">
            {currentUser ? `Welcome ${currentUser.attributes.first_name}` : ""}
            { loggedIn ? <Logout/> : null }
            <NavLink to="/">Home</NavLink>
            <NavLink to="/lists">All Lists</NavLink>
            {/* add search */}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default withRouter(connect(mapStateToProps)(NavBar))