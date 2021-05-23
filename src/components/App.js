import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import MainContainer from './MainContainer'
import NavBar from './NavBar'


class App extends React.Component {

    // every time component mounts, going to check for current user
    // sends fetch request to backend
    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        return ( 
            <div className="App">
                <NavBar/>
                <MainContainer/>
            </div>
        )
    }
}



export default connect(null, { getCurrentUser })(App)
/* <MainContainer/>
<Footer/> */