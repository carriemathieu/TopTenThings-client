import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'

import Logout from './Logout.js'

// functional component so no "this" -> just props, currentUser destructured from props
const NavBar = ({ currentUser, loggedIn, history }) => {
    // debugger
    return (
        // <div className = "navbar">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink class="navlink" to="/">Home</NavLink>
                    <NavLink class="navlink" to="/lists">All Lists</NavLink>
                    <NavLink class="navlink" to="/lists/new">Add List</NavLink>
                    <Navbar.Text>
                        {currentUser ? `Welcome ${currentUser.attributes.first_name}` : ""}
                    </Navbar.Text>
                    { loggedIn ? <Logout history={history}/> : null }
                </Container>
            </Navbar>
        // </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser: currentUser.data
    }
}

export default withRouter(connect(mapStateToProps)(NavBar))