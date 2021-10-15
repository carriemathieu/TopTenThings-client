import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const ListCard = ({list}) => {
    return (
        list ? 
        <div className="listContainer">
            <Card
                bg='dark'
                text='white'
                className="mb-2"
            >
                <Card.Body>
                    <Card.Title className="text-center">{list.attributes.list_title}</Card.Title>
                    
                </Card.Body>

                <Card.Text className="text-center">
                    Category: {list.attributes.category.name}
                    
                </Card.Text>

                <ListGroup variant="flush">
                    {list.attributes.list_content.map((listItem, index) => <ListGroup.Item key={index}>{listItem}</ListGroup.Item>)}
                </ListGroup>
                    
                <Card.Footer className="text-center">
                    <small className="text-muted">Submitted by: {list.attributes.user.first_name}</small>
                </Card.Footer>

                <Card.Link href={`/lists/${list.id}/edit`} className="text-center" id="edit-list-link">Edit this list</Card.Link>
                
            </Card>
        </div>
        : null
    )
}

export default ListCard