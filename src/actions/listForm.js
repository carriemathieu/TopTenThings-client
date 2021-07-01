// synchronous actions
export const updateNewListForm = (name, value, index) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_LIST_FORM",
        formData,
        index
    }
}

export const resetNewListForm = () => {
    return {
        type: "RESET_NEW_LIST_FORM"
    }
}

export const setEditFormData = list => {
    debugger
    const listFormData = {
        title: list.attributes.list_title,
        list_content: list.attributes.list_content,
        category_id: list.attributes.category_id
    }

    return {
        type: "SET_EDIT_FORM_DATA",
        listFormData
    }
}
// async actions