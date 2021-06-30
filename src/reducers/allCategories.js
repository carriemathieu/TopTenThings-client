export default (state = {}, action) => {
    switch (action.type) {
        case "SET_ALL_CATEGORIES":
            return action.categories
        default:
            return state
    }
}