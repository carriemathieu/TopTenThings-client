import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const ListCard = ({list}) => {
    return (
        list ? 
        <Card
            bg='dark'
            text='white'
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Body>
                <Card.Title>{list.attributes.list_title}</Card.Title>
                <Card.Text>
                    Category: {list.attributes.category.name}
                    {/* <ListGroup variant="flush"> */}
                        {console.log("list",list.attributes.list_content)}
                    {/* </ListGroup> */}
                    
                </Card.Text>
                <footer className="blockquote-footer">Submitted by: {list.attributes.user.first_name}</footer>
                <Card.Link href={`/lists/${list.id}/edit`}>Edit this list</Card.Link>
            </Card.Body>
        </Card>
        : <p>  </p>
    )
}

export default ListCard