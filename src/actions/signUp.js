// synchronous action creators
export const updateSignUpForm = formData => {
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData
    }
}

// async action creators
export const resetSignUpForm = () => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
}