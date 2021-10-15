import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            Welcome! Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>!
        </div>
    )
}

