import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

const Login = ({loginForm, updateLoginForm }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
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
const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

// const mapDispatchToProps -> dispatches return value of updateloginform -> this.props.updateLoginForm

export default connect(mapStateToProps, { updateLoginForm })(Login)