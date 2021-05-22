export const updateLoginForm = formData => {
    console.log(formData)
    return {
        type: "UPDATE_LOGIN_FORM",
        formData
    }
}