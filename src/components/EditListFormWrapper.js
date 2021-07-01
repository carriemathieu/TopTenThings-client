import React from 'react'
import { connect } from 'react-redux'

import ListForm from './ListForm'
import { updateList } from '../actions/userLists' //?
import { setEditFormData } from '../actions/listForm'

class EditListFormWrapper extends React.Component {

    componentDidMount() {
        this.props.setEditFormData(this.props.list)
    }

    handleSubmit = (event , formData, user_id, history) =>
    {
        event.preventDefault()
        const { updateList, list } = this.props
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