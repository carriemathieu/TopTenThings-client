import React from 'react'
import { connect } from 'react-redux'

import ListForm from './ListForm'
import { updateList } from '../actions/userLists' //?
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
        const { handleSubmit } = this.props

        return (
            <ListForm editMode handleSubmit={this.handleSubmit}/>
        )
    }
}

export default connect(null, { updateList, setEditFormData, resetNewListForm })(EditListFormWrapper)