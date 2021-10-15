import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import ListForm from './ListForm'
import { updateList, deleteList } from '../actions/userLists' //?
import { setEditFormData, resetNewListForm } from '../actions/listForm'

class EditListFormWrapper extends React.Component {

    componentDidMount() {
        this.props.list && this.props.setEditFormData(this.props.list)
    }

    // if there's a list that wasn't present previously, setFormDataForEdit ????
    componentDidUpdate(previousProps) {
        this.props.list && !previousProps.list && setEditFormData(this.props.list)
    }

    // if user navigates away from edit page, remove data from form
    componentWillUnmount() {
        this.props.resetNewListForm()
    }

    handleSubmit = (formData, user_id) =>
    {
        const { updateList, list, history } = this.props
        updateList({...formData, listId: list.id, user_id}, history)
    }

    render() { 
        const { deleteList, history, list } = this.props
        const listId = list ? this.props.list.id : null

        return (
            <div className="list-form">
                <ListForm editMode handleSubmit={this.handleSubmit}/>
                <div className="d-grid gap-2">
                    <Button 
                        variant="outline-danger"
                        onClick={()=>deleteList(list.id, history)}
                        id="delete-trip-btn"
                    >Delete List</Button>
                </div>
            </div>
        )
    }
}

export default connect(null, { updateList, setEditFormData, resetNewListForm, deleteList })(EditListFormWrapper)