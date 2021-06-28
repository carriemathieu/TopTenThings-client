import React from 'react'
import { connect } from 'react-redux'
import { updateNewListForm } from '../actions/newListForm'
import { createList } from '../actions/userLists'

const NewListForm = ({category, list_title, list_content, updateNewListForm, createList, userId}) => {

    const handleChange = event => {
        const { name, value } = event.target
        updateNewListForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createList({...formData, userId})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder= "category" name="category" onChange={handleChange} value={category}/>
            <input placeholder= "list title" name="list_title" onChange={handleChange} value={list_title}/>
            <input placeholder= "list content" name="list_content" onChange={handleChange} value={list_content}/>
            <input type="submit" value="Create List"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        formData: state.newListForm,
        userId: state.currentUser.id
    }   
}

// updateNewListForm = shortcut for mapdispatchtoprops
export default connect(mapStateToProps, {updateNewListForm, createList})(NewListForm)
