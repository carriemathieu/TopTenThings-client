import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser'
import { Form, Button, FloatingLabel } from 'react-bootstrap'

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
        <div className="login-form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                            controlId="loginFormEmail"
                            label="Email"
                            className="mb-3"
                    >
                        <Form.Control 
                            type="email"  
                            placeholder="Email"
                            name="email" 
                            value={loginFormData.email}  
                            onChange={handleInputChange}
                        />
                    </FloatingLabel>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel
                        controlId="loginFormPassword"
                        label="Password"
                        className="mb-3"
                    >
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            name="password" 
                            value={loginFormData.password} 
                            onChange={handleInputChange}
                        />
                    </FloatingLabel>
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button 
                        variant="outline-dark" 
                        as="input" 
                        type="submit"
                        value="Log In"
                    />
                </div>
            </Form>
        </div>
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