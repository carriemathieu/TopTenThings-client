import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from '../actions/signUp'
import { signup } from '../actions/currentUser'

const SignUp = ({ signupFormData, updateSignUpForm, signup }) => {
    
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignUpForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="first name" name="first_name" type="text" value={signupFormData.first_name} onChange={handleInputChange} />
            <input placeholder="last name" name="last_name" value={signupFormData.last_name} type="text" onChange={handleInputChange} />
            <input placeholder="email" name="email" value={signupFormData.email} type="text" onChange={handleInputChange} />
            <input placeholder="password" name="password" value={signupFormData.password} type="password" onChange={handleInputChange} />
            <input type="submit" value="Sign Up"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signUpForm
    }
}

export default connect(mapStateToProps, { updateSignUpForm, signup })(SignUp)