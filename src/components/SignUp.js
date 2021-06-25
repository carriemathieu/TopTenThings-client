import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from '../actions/currentUser.js'

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
            <input placeholder="firstName" name="firstName" value={signupFormData.firstName} type="text" onChange={handleInputChange} />
            <input placeholder="lastName" name="lastName" value={signupFormData.lastName} type="text" onChange={handleInputChange} />
            <input placeholder="email" name="email" value={signupFormData.email} type="text" onChange={handleInputChange} />
            <input placeholder="password" name="password" value={signupFormData.password} type="password" onChange={handleInputChange} />
            <input type="submit" value="Sign Up"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignUpForm, signup })(SignUp)


// t.string "first_name"
// t.string "last_name"
// t.string "email"