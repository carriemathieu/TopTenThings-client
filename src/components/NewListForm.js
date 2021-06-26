import React from 'react'
import { connect } from 'react-redux'
import { updateNewListForm } from '../actions/newListForm'

const NewListForm = ({category, list_title, list_content, history}) => {

    const handleChange = event => {
        const { name, value } = event.target
        updateNewListForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder= "category" name="category" onChange={handleChange} value={category}/>
            <input placeholder= "list title" name="list_title" onChange={handleChange} value={list_title}/>
            <input placeholder= "list content" name="list_content" onChange={handleChange} value={list_content}/>
            <input type="submit">Create New List</input>
        </form>
    )
}

const mapStateToProps = state => {
    const { category, list_title, list_content } = state.newListForm
    
    return {
        category,
        list_title,
        list_content
    }   
}

// updateNewListForm = shortcut for mapdispatchtoprops
export default connect(mapStateToProps, {updateNewListForm})(NewListForm)
    
// t.integer "user_id"
// t.integer "category_id"
// t.text "list_content", default: [], array: true
// t.string "list_title"