import React from 'react'
import { connect } from 'react-redux'

import ListForm from './ListForm'
import { createList } from '../actions/userLists'

const NewTripFormWrapper = ({ history, createList }) => {
    const handleSubmit = (event , formData, user_id, history) => {
        event.preventDefault()
        debugger
        createList({...formData, user_id}, history)
    }

    return (
        <ListForm history={history} handleSubmit={handleSubmit}/>
    )
}

export default connect(null, { createList })(NewTripFormWrapper)