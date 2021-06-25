import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar'
import AllLists from './AllLists'

import Login from './Login'
import Logout from './Logout'
// import MainContainer from './MainContainer'



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
                {/* <MainContainer/> */}
                <Router>
                    <>
                    <Route exact path='/login' component = {Login} />
                    <Route exact path='/signup' component={Logout}/>
                    <Route exact path='all-lists' component={AllLists} />
                    </>
                </Router>
            </div>
        )
    }
}



export default connect(null, { getCurrentUser })(App)
/* <MainContainer/>
<Footer/> */