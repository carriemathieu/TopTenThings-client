export default (state = {}, action) => {
    switch (action.type) {
        case "SET_USER_LISTS":
            return action.lists
        case "ADD_LIST":
            return state.concat(action.lists)
        case "CLEAR_LISTS":
            return []
        default:
            return state
    }
}