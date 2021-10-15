export default (state = {}, action) => {
    console.log("inside reducer, action", action)
    switch (action.type) {
        case "ADD_LIST":
            console.log("add list reducer")
            // const list = {
            //     list_title: action.list_title,
            //     list_content: action.list_content,
            //     list_category: action.list_category
            // }
            // return {
            //     ...state,
            //     allLists: [ ...state.allLists, list]
            // }
        case "CLEAR_LISTS":
            return []
        case "SET_USER_LISTS":
            return action.lists
        case "UPDATE_LIST":
            console.log("update list reducer")
            // map over each list - does list id = action.list id? if so, return action.list... otherwise, return list
            return state.map(list => list.id === action.list.id ? action.list : list)
        case "DELETE_LIST":
            console.log("delete list reducer")
            return state.filter(list => list.id !== action.listId)
        default:
            console.log("state")
            return state
    }
}