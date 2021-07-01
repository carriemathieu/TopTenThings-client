export default (state = {}, action) => {
    switch (action.type) {
        case "ADD_LIST":
            return state.concat(action.lists)
        case "CLEAR_LISTS":
            return []
        case "SET_USER_LISTS":
            return action.lists
        case "UPDATE_LIST":
            return state
        default:
            return state
    }
}