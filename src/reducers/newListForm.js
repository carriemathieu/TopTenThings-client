const initialState = {
    list_title: "",
    list_content: [],
    category: ""
}

export default (state=initialState, action) => {
    switch(action.type){
        case "UPDATE_NEW_LIST_FORM":
            // debugger
            const updatedListContent = [...state.list_content]
            
            updatedListContent[action.index] = action.formData.value

            return {
                ...state,
                list_content: updatedListContent
                // [action.formData.name][action.index]: action.formData.value
            }
        case "RESET_NEW_LIST_FORM":
            return initialState
        default: 
            return state
    }
}

