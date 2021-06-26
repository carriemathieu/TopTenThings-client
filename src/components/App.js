import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from './NavBar'
import AllLists from './AllLists'

import Logout from './Logout'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import NewListForm from './NewListForm'
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
                {/* <NavBar/> */}
                { loggedIn ? <Logout/> : null }
                <Router>
                    <>
                    <Route exact path='/signup' render={({history}) => <SignUp history={history}/>} />
                    <Route exact path='/login' component = {Login} />
                    {/* <Route exact path='all-lists' component={AllLists} /> */}
                    <Route exact path='/' render={(props) => loggedIn ? <AllLists {...props} /> : <Home {...props}/>} />
                    <Route exact path='/lists/new' component={NewListForm} />
                    </>
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

export default connect(mapStateToProps, { getCurrentUser })(App)
/* <MainContainer/>
<Footer/> */