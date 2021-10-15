import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from '../actions/signUp'
import { signup } from '../actions/currentUser'
import { Form, Button, FloatingLabel } from 'react-bootstrap'

const SignUp = ({ signupFormData, updateSignUpForm, signup, history }) => {
    
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
        signup(signupFormData, history)
    }

    return (
        <div className="signup-form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="signupFormName">

                    <FloatingLabel
                        controlId="signFormFirstName"
                        label="First Name"
                        className="mb-3"
                    >
                        <Form.Control 
                            type="text" 
                            placeholder="first name" 
                            name="first_name"
                            value={signupFormData.first_name} 
                            onChange={handleInputChange}
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="signFormLastName"
                        label="Last Name"
                        className="mb-3"
                    >
                        <Form.Control 
                            type="text" 
                            placeholder="last name"
                            name="last_name"
                            value={signupFormData.last_name} 
                            onChange={handleInputChange}
                        />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="signupFormEmail">
                    <FloatingLabel
                        controlId="signFormEmail"
                        label="Email"
                        className="mb-3"
                    >
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            name="email" 
                            value={signupFormData.email}  
                            onChange={handleInputChange}
                        />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="signupFormPassword">
                    <FloatingLabel
                        controlId="signFormPassword"
                        label="Password"
                        className="mb-3"
                    >
                        <Form.Control 
                            type="password" 
                            placeholder="password"
                            name="password" 
                            value={signupFormData.password}   
                            onChange={handleInputChange}
                        />
                    </FloatingLabel>
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button 
                        variant="outline-dark" 
                        as="input" 
                        type="submit"
                        value="Sign Up"
                    />
                </div>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signUpForm
    }
}

export default connect(mapStateToProps, { updateSignUpForm, signup })(SignUp)