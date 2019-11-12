import React, { Component } from 'react'
import Workouts from './Workouts'
import CaloriesPerHour from './CaloriesPerHour'
import { Link } from 'react-router-dom'

export default class Excersizes extends Component {
    render() {
        return (
            <div>
                <h1>Calorie Counter App!</h1>
                <br/>
                <h4>Choose the type of activity you want</h4>
                <Workouts />
                <br/>
                <Link to="/SubmitNewWorkout">Suggest a new Workout</Link>
                <br/>
                <Link to="/Description">Check out the benefits of excersizing!</Link>
            </div>
        )
    }
}