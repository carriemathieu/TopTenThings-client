import React from 'react'
import { connect } from 'react-redux'

import { updateNewListForm } from '../actions/listForm'
import { createList } from '../actions/userLists'
import { FloatingLabel, Form, Button } from 'react-bootstrap'
// import { allCategories } from '../actions/allCategories'


const ListForm = ({categories, formData, history, updateNewListForm, user_id, handleSubmit, editMode }) => {
    
    // add index
    const handleChange = (event, index) => {
        const { name, value } = event.target
        updateNewListForm(name, value, index)
    }

    const optionItems = () => {
        return categories.map((category) =>
            <option key={category.id} value={editMode ? formData.category_id : category.id} id={category.id}>{category.name}</option>
        )
    }

    return(
        <Form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData, user_id, history)
        }}>
            <Form.Group className="mb-3" controlId="formListTitle">
                <FloatingLabel
                    controlId="floatingListTitle"
                    label="List Title"
                    className="mb-3"
                >
                    <Form.Control 
                        type="text"
                        placeholder= "list title" 
                        name="list_title" 
                        onChange={handleChange} 
                        value={formData.list_title}
                    />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formListSelectCategory">
                <Form.Select onChange={handleChange} name="category_id">
                <option value="" defaultValue >Please Select a Category</option>
                    {optionItems()}
                </Form.Select>
            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formListContent">
                {[...Array(10)].map((value, index) => (
                    <Form.Control 
                        key={index}
                        size="sm"
                        type="text"
                        placeholder={index+1+'.'}
                        name={"list_content"} // "list_content[]" -> just overwrites itself
                        // "list_content[" + index + "]" stores as list_title, list_content[0], etc instead of in arrayhj
                        onChange={e => handleChange(e, index)}
                        value={formData.list_content[index]}
                    />
                ))}
            </Form.Group>

            <Form.Group className="d-grid gap-2" controlId="submitButton">
                <Button 
                    variant="outline-dark" 
                    as="input" 
                    type="submit" 
                    value={editMode ? "Update List" : "Create List"}
                />
            </Form.Group>
        </Form>
    )
}

const mapStateToProps = state => {
    const user_id = state.currentUser ? state.currentUser.id : ""
    return {
        categories: state.allCategories,
        formData: state.listForm,
        user_id
    }   
}

// updateNewListForm = shortcut for mapdispatchtoprops
export default connect(mapStateToProps, {updateNewListForm, createList})(ListForm)
