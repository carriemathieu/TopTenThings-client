import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'

const AllLists = props => {
    const listCards = props.allLists.length > 0 ? 
    <div className="list-cards-container">
        <h3 className="text-center">All Top 10 Lists</h3>
        <p className="text-center">Click on a list below to see more</p>
        <ListGroup>
            {props.allLists.map((list, index) => {
                return <ListGroup.Item 
                    key={index}
                    className="d-flex justify-content-between align-items-start"
                    action href={`/lists/${list.id}`}
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">  
                            {list.attributes.list_title}  
                        </div>
                        Category: {list.attributes.category.name}
                    </div>
                </ListGroup.Item>
            })} 
        </ListGroup>  
    </div> : "There are no lists currently! Add click 'Add List' to one."

    return (
        listCards
    )
}

// we provide mapstatetoprops to redux in order to tell redux - "give me access to state so we can pick & choose pieces of state we'd like available to component"
const mapStateToProps = ({ allLists }) => {
    return {
        allLists
    }
}

// connect is function returning function, supplying AllLists component w/ props including state (mapstatetoprops) &/or actions(mapdispatchtoprops)
export default connect(mapStateToProps)(AllLists)