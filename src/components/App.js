import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import NavBar from './NavBar'


class App extends React.Component {

    // every time component mounts, going to check for current user
    // sends fetch request to backend
    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        return ( 
            <NavBar/>
        )
    }
}



export default connect(null, { getCurrentUser })(App)
/* <MainContainer/>
<Footer/> */