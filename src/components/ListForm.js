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

    //Array(10).fill().map
    const optionItems = () => {
        return categories.map((category) =>
            <option key={category.name} value={editMode ? formData.category_id : category.id} id={category.id}>{category.name}</option>
        )
    }

    return(
        <div className="list-form">
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
                        <option value="" disabled selected>Please Select a Category</option>
                        {optionItems()}
                    </Form.Select>
                </Form.Group>

                { console.log(formData)}
                {/* {list_content.map((index) => <input name={`list_content[${index}]`} />)} */}
                <Form.Group className="mb-3" controlId="formListContent">
                    1.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 0)} value={formData.list_content[0]}/><br/>
                    2.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 1)} value={formData.list_content[1]}/><br/>
                    3.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 2)} value={formData.list_content[2]}/><br/>
                    4.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 3)} value={formData.list_content[3]}/><br/>
                    5.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 4)} value={formData.list_content[4]}/><br/>
                    6.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 5)} value={formData.list_content[5]}/><br/>
                    7.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 6)} value={formData.list_content[6]}/><br/>
                    8.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 7)} value={formData.list_content[7]}/><br/>
                    9.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 8)} value={formData.list_content[8]}/><br/>
                    10.<input placeholder= "list content" name="list_content" onChange={e => handleChange(e, 9)} value={formData.list_content[9]}/><br/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="submitButton">
                    <Button variant="outline-dark" as="input" type="submit" value={editMode ? "Update List" : "Create List"}/>
                </Form.Group>
            </Form>
        </div>
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
