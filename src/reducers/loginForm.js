const initialState = {
    email: "",
    password: ""
}
export default (state = null, action) => {
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.user
        default:
            return state
    }
}