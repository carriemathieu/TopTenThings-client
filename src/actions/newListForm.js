// synchronous actions
export const updateNewListForm = (name, value, index) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_LIST_FORM",
        formData,
        index
    }
}

// async actions