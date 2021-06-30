import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const AllLists = props => {
    const listCards = props.allLists.length > 0 ? props.allLists.map(list => <p key={list.id}><Link to={`/lists/${list.id}`} key={list.id}> {list.name} </Link></p>) : "Loading..."
    

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