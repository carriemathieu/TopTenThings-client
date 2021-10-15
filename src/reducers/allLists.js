export default function allLists(state = {}, action) {
    switch (action.type) {
        case "SET_ALL_LISTS":
            return action.lists
        case "CLEAR_LISTS":
            return []
        default:
            return state
    }
}