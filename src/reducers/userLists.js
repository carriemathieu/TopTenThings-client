export default function userLists(state = {}, action) {
    switch (action.type) {
        case "CLEAR_LISTS":
            return []
        case "SET_USER_LISTS":
            return action.lists
        default:
            return {
                ...state
            }
    }
}