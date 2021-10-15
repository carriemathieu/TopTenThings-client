import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="welcome-div">
            <h1>Welcome!</h1> 
            <p>Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>!</p>
        </div>
    )
}

