import { getCurrentUser } from "../actions/currentUser"

export default function allLists(state = {}, action) {
    switch (action.type) {
        case "ADD_LIST":
            console.log("***ADD LIST REDUCER***, ACTION:", action)
            const list = {
                id: action.list.id,
                attributes: {
                    list_title: action.list.attributes.list_title,
                    list_content: action.list.attributes.list_content,
                    category: action.list.attributes.category,
                }
            }
            console.log("add_list reducer, list:", list)
            return [
                ...state, list
            ]
        case "SET_ALL_LISTS":
            console.log("set all lists, action.lists.attributes", action.lists.attributes)
            return action.lists
        case "CLEAR_LISTS":
            return []
        default:
            return state
    }
}