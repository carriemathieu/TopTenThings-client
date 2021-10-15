import React from 'react'
import { connect } from 'react-redux'

import ListForm from './ListForm'
import { createList } from '../actions/userLists'

const NewListFormWrapper = ({ history, createList }) => {
    const handleSubmit = (formData, user_id) => {
        createList({...formData, user_id}, history)
    }

    return (
        <div className="list-form">
            <ListForm history={history} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect(null, { createList })(NewListFormWrapper)