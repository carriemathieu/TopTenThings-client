
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
        case "DELETE_LIST":
            console.log("state.allLists", state)
            const lists = state.filter(list => list.id !== action.listId)
        // debugger
        // console.log("...state", {...state})
        // console.log("state", state.allLists)
        // return state
            return lists           
            
        case "SET_ALL_LISTS":
            return action.lists
        case "CLEAR_LISTS":
            return []
        default:
            return state
    }
}