import React from 'react'
import { connect } from 'react-redux'

const Login = () => {
    return (
        <form onSubmit={}>
            <input placeholder="username" name="email" value={} type="text" onChange={ } />
            <input placeholder="password" name="password" value={} type="text" onChange={ } />
            <input type="submit" value="Log In"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        email: state.loginForm.email,
        password: state.loginForm.password
    }
}

export default connect()(Login)