import React, { Component } from 'react'
import Workouts from './Workouts'
import LenthOfWorkout from './LenthOfWorkout'
import CaloriesPerHour from './CaloriesPerHour'
import { Link } from 'react-router-dom'

export default class Excersizes extends Component {
    render() {
        return (
            <div>
                <h1>Calorie Counter App!</h1>
                <Workouts />
                <LenthOfWorkout />
                <Link to="/SubmitNewWorkout">Suggest a new Workout</Link>
                <CaloriesPerHour />
                <Link to="/Description">Check out the benefits of excersizing!</Link>
            </div>
        )
    }
}