import React from 'react'
import { Link } from 'react-router-dom'

const ListCard = ({list}) => {
    return (
        list ? 
        <div>
            <h4>Title: {list.attributes.list_title}</h4>
            <p>Category: {list.attributes.category.name}</p>
            <p>Content: (will work on later- need to map)</p>
            <p>Created by: {list.attributes.user.first_name}</p>
            <Link to={`/lists/${list.id}/edit`}>Edit this list</Link>
        </div>
        : <p> "No lists!"</p>
    )
}

export default ListCard