import React from 'react'
// import Login from './Login.js'
// import Logout from './Logout.js'
import { connect } from 'react-redux'

// functional component so no "this" -> just props, currentUser destructured from props
const NavBar = ({ currentUser }) => {
    return (
        <div className = "Navbar">
            {currentUser ? `Welcome ${currentUser.attributes.first_name}` : ""}
            {/* {currentUser ? <Logout /> : <Login/>} */}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)