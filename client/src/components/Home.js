import React, { Component } from 'react'
import Workouts from './Workouts.jsx'
import { Link } from 'react-router-dom'

export default class Excersizes extends Component {
    render() {
        return (
            <div>
                <h1>Calorie Counter App!</h1>
                <br/>
                <h2>Choose the type of activity you want</h2>
                <Workouts />
                <br/>
                <Link className="links" to="/SubmitNewWorkout">Suggest a new Workout</Link>
                <br/>
                <Link className="links" to="/Description">Click here to see the benefits of excersizing!</Link>
            </div>
        )
    }
}