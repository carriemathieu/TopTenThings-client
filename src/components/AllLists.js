import React from 'react'
import { connect } from 'react-redux'
import ListCard from './ListCard'


const AllLists = props => {
    const listCards = props.allLists.length > 0 ? props.allLists.map(list => <ListCard list={list} key={list.id} />) : "Loading..."
    
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