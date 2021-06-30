export default (state = [], action) => {
    console.log("all cat reducer", action.type)
    switch (action.type) {
        case "SET_ALL_CATEGORIES":
            return action.categories
        default:
            return state
    }
}