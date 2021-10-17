// const initialState = {
//     allLists:[]
// }

// import allLists from "./allLists"

export default function userLists(state = {}, action) {
    switch (action.type) {
        // case "ADD_LIST":
        //     // debugger
        //     const list = {
        //         list_title: action.list.attributes.list_title,
        //         list_content: action.list.attributes.list_content,
        //         list_category: action.list.attributes.category
        //     }
        //     console.log("add_list reducer, list:", list)
        //     return {
        //         ...state,
        //         allLists: {...state.allLists, list}
        //     }
        case "CLEAR_LISTS":
            return []
        case "SET_USER_LISTS":
            return action.lists
        case "UPDATE_LIST":
            // debugger
            // map over each list - does list id = action.list id? if so, return action.list... otherwise, return list
            return state.allLists.map(list => list.id === action.list.id ? action.list : list)
        
        default:
            return {
                ...state
            }
    }
}