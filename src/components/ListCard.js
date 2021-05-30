import React from 'react'

const ListCard = ({list}) => {
    return (
        <p>{list.attributes.list_title}</p>
    )
}

export default ListCard