import React from 'react'
import { connect } from 'react-redux'


const AllLists = () => {
    return (
        <div></div>
    )
}

const mapStateToProps = ({ allLists }) => {
    return {
        allLists
    }
}

export default connect(mapStateToProps)(AllLists)