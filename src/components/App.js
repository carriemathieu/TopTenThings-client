import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import AllLists from './AllLists'

import Logout from './Logout'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
// import MainContainer from './MainContainer'

class App extends React.Component {

    // every time component mounts, going to check for current user
    // sends fetch request to backend
    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        // if user is logged in, render AllLists
        const { loggedIn } = this.props

        return ( 
            <div className="App">
                <NavBar/>
                <Logout/>
                <Router>
                    <Switch>
                        <>
                        <Route exact path='/' render={() => loggedIn ? <AllLists/> : <Home/>}/>
                        <Route exact path='/signup' component = {SignUp} />
                        <Route exact path='/login' component = {Login} />
                        {/* <Route exact path='all-lists' component={AllLists} /> */}
                        </>
                    </Switch>
                </Router>
            </div>
        )
    }
}

// getting whether or not a user is logged in
const mapStateToProps = state => {
    return ({
        loggedIn: !!state.currentUser
    })
}

export default connect(null, { getCurrentUser })(App)
/* <MainContainer/>
<Footer/> */