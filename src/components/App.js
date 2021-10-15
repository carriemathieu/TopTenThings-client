import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css';

import AllLists from './AllLists'
import EditListFormWrapper from './EditListFormWrapper'
import ListCard from './ListCard'
import Login from './Login'
import NavBar from './NavBar'
import NewListFormWrapper from './NewListFormWrapper'
import SignUp from './SignUp'

import { Home } from './Home'
import { getCurrentUser } from '../actions/currentUser'
import { setEditFormData } from '../actions/listForm'
// import MainContainer from './MainContainer'

class App extends React.Component {

    // every time component mounts, going to check for current user
    // sends fetch request to backend
    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        // if user is logged in, render AllLists
        // const { loggedIn, lists, setEditFormData } = this.props
        const { loggedIn, lists } = this.props
    
        return ( 
            <div className="App"> 
                <Router>
                    <>
                    {loggedIn ? <NavBar loggedIn={loggedIn} history={this.props.history}/> : <Home currentUser={this.props.currentUser}/>}
                    <Route exact path='/signup' render={({history}) => <SignUp history={history}/>} />
                    <Route exact path='/login' component = {Login} />
                    {/* <Route exact path='all-lists' component={AllLists} /> */}
                    <Route exact path='/lists' render={(props) => <AllLists {...props} />} />
                    <Route exact path='/lists/new' component={NewListFormWrapper} />
                    <Route exact path='/lists/:id' render={props => {  
                        // from lodash library - checks if object is empty. doesn't render list card until lists object is filled in order to use "find"
                        if(!_.isEmpty(lists)){
                            const list = lists.find(l => l.id === props.match.params.id) 
                            return <ListCard list={list} {...props}/> 
                        }
                    }}/>

                    <Route exact path='/lists/:id/edit' render={props => {  
                        
                        if(!_.isEmpty(lists)){
                            const list = lists.find(l => l.id === props.match.params.id)

                            return <EditListFormWrapper list={list} {...props}/> 

                        }
                    }}/>
                    </>
                </Router>
            </div>
        )
    }
}

// getting whether or not a user is logged in
const mapStateToProps = state => {
    return ({
        loggedIn: !!state.currentUser,
        lists: state.allLists
    })
}

export default connect(mapStateToProps, { getCurrentUser, setEditFormData })(App)
/* <MainContainer/>
<Footer/> */