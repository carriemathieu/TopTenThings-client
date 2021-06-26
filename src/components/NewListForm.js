import React from 'react'

const NewListForm = () => {
    const handleChange = (name,value) => {

    }

    const handleSubmit = () => {

    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="category" onChange={handleChange} value={}/>
            <input name="list_title" onChange={handleChange} value={}/>
            <input name="list_content" onChange={handleChange} value={}/>
            <input type="submit">Create New List</input>
        </form>
    )
}

export default NewListForm
// t.integer "user_id"
// t.integer "category_id"
// t.text "list_content", default: [], array: true
// t.string "list_title"