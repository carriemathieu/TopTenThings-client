import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser'

const Login = ({loginFormData, updateLoginForm, login, history }) => {

    const handleInputChange = event => {
        // gives me name & value from event.target
        const { name, value } = event.target
        // builds object with event name (i.e. email/password) & field value
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    // calls on login action creator, passes in history in order force react to update & redirect user to '/' path after logging in
    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="email" name="email" value={loginFormData.email} type="text" onChange={handleInputChange} />
            <input placeholder="password" name="password" value={loginFormData.password} type="password" onChange={handleInputChange} />
            <input type="submit" value="Log In"/>
        </form>
    )
}

// gives me an argument (object) coming to this component
// gives us access to props.loginForm
// { 
    // email: "xxx@xxx.com"
    // password: "xxx"
// }
const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)