const initialState = {
    listTitle: "",
    listContent: "",
    category: ""
}

export default (state=initialState, action) => {
    switch(action.type){
        case "UPDATE_NEW_LIST_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_LIST_FORM":
            return initialState
        default: 
            return state
    }
}

