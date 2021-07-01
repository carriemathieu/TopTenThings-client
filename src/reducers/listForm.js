const initialState = {
    list_title: "",
    list_content: [],
    category_id: ""
}

export default (state=initialState, action) => {
    switch(action.type){
        case "UPDATE_NEW_LIST_FORM":
            const updatedListContent = [...state.list_content]
            
            updatedListContent[action.index] = action.formData.value

            if(action.formData.name == "list_content") {
                return {
                    ...state,
                    list_content: updatedListContent
                }
            }
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_LIST_FORM":
            return initialState
        case "SET_EDIT_FORM_DATA":
            // debugger
            return action.listFormData
        default: 
            return state
    }
}

