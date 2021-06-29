import React from 'react'
import { connect } from 'react-redux'

import { updateNewListForm } from '../actions/newListForm'
import { createList } from '../actions/userLists'


const NewListForm = ({category, list_title, list_content, updateNewListForm, createList, user_id, formData}) => {

    // add index
    const handleChange = (event, index) => {
        // debugger
        const { name, value } = event.target
        updateNewListForm(name, value, index)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createList({...formData, user_id})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder= "category" name="category" onChange={handleChange} value={category}/>
            <input placeholder= "list title" name="list_title" onChange={handleChange} value={list_title}/><br/>
            {/* {formData.list_content.map((index) => <input name={`list_content[${index}]`} />)} */}
            1.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 0)} value={list_content}/><br/>
            2.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 1)} value={list_content}/><br/>
            3.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 2)} value={list_content}/><br/>
            4.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 3)} value={list_content}/><br/>
            5.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 4)} value={list_content}/><br/>
            6.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 5)} value={list_content}/><br/>
            7.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 6)} value={list_content}/><br/>
            8.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 7)} value={list_content}/><br/>
            9.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 8)} value={list_content}/><br/>
            10.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 9)} value={list_content}/><br/>
           
            <input type="submit" value="Create List"/>
        </form>
    )
}

const mapStateToProps = state => {
    const user_id = state.currentUser ? state.currentUser.id : ""
    return {
        formData: state.newListForm,
        user_id
    }   
}

// updateNewListForm = shortcut for mapdispatchtoprops
export default connect(mapStateToProps, {updateNewListForm, createList})(NewListForm)
