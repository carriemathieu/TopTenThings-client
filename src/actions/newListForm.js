// synchronous actions
export const updateNewListForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_LIST_FORM",
        formData: { name, value }
    }
}

// async actions