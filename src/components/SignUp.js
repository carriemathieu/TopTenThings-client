import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/currentUser.js'

const SignUp = ({ signupFormData, updateSignupForm, signup }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="email" name="email" value={loginFormData.email} type="text" onChange={handleInputChange} />
            <input placeholder="password" name="password" value={loginFormData.password} type="password" onChange={handleInputChange} />
            <input type="submit" value="Sign Up"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormDate: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(SignUp)


