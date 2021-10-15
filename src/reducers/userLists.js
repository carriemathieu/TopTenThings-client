export default function userLists(state = {}, action) {
    switch (action.type) {
        case "ADD_LIST":
            // const list = {
            //     list_title: action.list_title,
            //     list_content: action.list_content,
            //     list_category: action.list_category
            // }
            // return {
            //     ...state,
            //     allLists: [ ...state.allLists, list]
            // }
            return "ok"
        case "CLEAR_LISTS":
            return []
        case "SET_USER_LISTS":
            return action.lists
        case "UPDATE_LIST":
            // map over each list - does list id = action.list id? if so, return action.list... otherwise, return list
            return state.map(list => list.id === action.list.id ? action.list : list)
        case "DELETE_LIST":
            return state.filter(list => list.id !== action.listId)
        default:
            return state
    }
}