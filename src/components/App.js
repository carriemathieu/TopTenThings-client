import React from 'react'

class App extends React.Component {
    componentDidMount() {
        fetch("http://localhost:3000/api/v1/categories")
            .then(resp => resp.json)
            .then(res => console.log(res))
    }

    render() {
        return ( 
            <div>App</div>
        )
    }
}

export default App