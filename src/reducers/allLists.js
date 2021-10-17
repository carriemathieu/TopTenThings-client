
export default function allLists(state = {}, action) {
    switch (action.type) {
        case "ADD_LIST":
            const list = {
                id: action.list.id,
                attributes: {
                    list_title: action.list.attributes.list_title,
                    list_content: action.list.attributes.list_content,
                    category: action.list.attributes.category,
                }
            }
            return [
                ...state, list
            ]
        case "UPDATE_LIST":
            // map over each list - does list id = action.list id? if so, return action.list... otherwise, return list
            return state.map(list => list.id === action.list.id ? action.list : list)
        case "DELETE_LIST":
            const lists = state.filter(list => list.id !== action.listId)
            return lists           
        case "SET_ALL_LISTS":
            return action.lists
        case "CLEAR_LISTS":
            return []
        default:
            return state
    }
}