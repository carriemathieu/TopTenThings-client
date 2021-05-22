import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

const Login = ({loginForm, updateLoginForm }) => {
    const handleInputChange = event => {
        // gives me name & value from event.target
        const { name, value } = event.target
        // builds object with event name (i.e. email/password) & field value
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    return (
        <form /*onSubmit={}*/>
            <input placeholder="username" name="email" value={loginForm.email} type="text" onChange={handleInputChange} />
            <input placeholder="password" name="password" value={loginForm.password} type="text" onChange={handleInputChange} />
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
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm })(Login)