import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class SubmitNewWorkout extends Component {
    state = {
        workout: {
            name: '',
            type: '',
            caloriesPerHour: ''
        },
        workoutList: []
    }

    componentDidMount = () => {
        axios.get('/excersize')
            .then((res) => {
                this.setState({ workoutList: res.data })
                console.log(res.data)
            })
    }


    handleChange = (e) => {
        e.preventDefault()
        const prevState = { ...this.state.workout }
        prevState[e.target.name] = e.target.value
        this.setState({ workout: prevState })
    }

    createNewWorkout = (e) => {
        const newWorkout = {
            name: this.state.workout.name,
            type: this.state.workout.type,
            caloriesPerHour: this.state.workout.caloriesPerHour
        }
        axios.post('/excersize', newWorkout)
            .then((res) => {
                res.json(res.data)
            })
    }


    render() {
        return (
            <div>
                <h1>Submit a new workout</h1>
                <form  onSubmit={this.createNewWorkout}>
                    {/* <input type="text" name="user" placeholder="Your Name" onChange={this.handleChange} value={this.state.workout.user} /> */}
                    <input className="form" type="text" name="name" placeholder="Name of workout" onChange={this.handleChange} value={this.state.workout.name} />
                    <input className="form" type="text" name="type" placeholder="Type of workout" onChange={this.handleChange} value={this.state.workout.type} />
                    <input className="form" type="number" name="caloriesPerHour" placeholder="Cals burned per hour" onChange={this.handleChange} value={this.state.workout.caloriesPerHour} />
                    <button type="submit" className="btn">Send Request</button>
                </form>
                <p>

                </p>
                <div>
                    <h2>All requests:</h2>
                    {this.state.workoutList.map((result) => {
                        return (
                            <div className="newWorkouts" key={result._id}>
                                {result.name}
                            </div>
                        )
                    })
                }
                </div>
<Link className="links" to='/'>Back to home page</Link>
            </div>
        )
    }
}