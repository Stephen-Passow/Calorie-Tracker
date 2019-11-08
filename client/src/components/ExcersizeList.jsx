import React, { Component } from 'react'
import axios from 'axios'



export default class ExcersizeList extends Component {
    state = {
        allExcersizes: []
    }
    
    componentDidMount() {
        axios.get('/excersize')
            .then((res) => {
                this.setState({ allExcersizes: res.data })
            })
    }
    render() {
        return (
            <div>
            <h2>All Excersizes</h2>
                {this.state.allExcersizes.map((excersize) => {
                    return (<p>{excersize.name}</p>)
                })}
            </div>
        )
    }
}