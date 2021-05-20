import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

const Login = ({email, password, updateLoginForm }) => {
    return (
        <form /*onSubmit={}*/>
            <input placeholder="username" name="email" value={email} type="text" /* onChange={ } */ />
            <input placeholder="password" name="password" value={password} type="text" /* onChange={ } */ />
            <input type="submit" value="Log In"/>
        </form>
    )
}

// gives me an argument (object) coming to this component
const mapStateToProps = state => {
    return {
        email: state.loginForm.email,
        password: state.loginForm.password
    }
}

// const mapDispatchToProps

export default connect(mapStateToProps, { updateLoginForm })(Login)