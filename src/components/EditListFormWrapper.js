import React from 'react'
import { connect } from 'react-redux'

import ListForm from './ListForm'
import { updateList } from '../actions/userLists' //?
import { setEditFormData } from '../actions/listForm'

class EditListFormWrapper extends React.Component {

    componentDidMount() {
        this.props.list && this.props.setEditFormData(this.props.list)
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

export default connect(null, { updateList, setEditFormData })(EditListFormWrapper)