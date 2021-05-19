import React from 'react'
import Login from './components/Login'

class App extends React.Component {
    // componentDidMount() {
    //     fetch("http://localhost:3000/api/v1/categories")
    //         .then(resp => resp.json())
    //         .then(console.log)
    // }

    render() {
        return ( 
            <Login/>
        )
    }
}

export default App