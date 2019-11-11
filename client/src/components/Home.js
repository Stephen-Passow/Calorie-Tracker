import React, { Component } from 'react'
import ExcersizeTypes from './ExcersizeTypes'
import Workouts from './Workouts'
import LenthOfWorkout from './LenthOfWorkout'
import CaloriesPerHour from './CaloriesPerHour'

export default class Excersizes extends Component {
    render() {
        return (
            <div>
                <h1>Calorie Counter App!</h1>
                <ExcersizeTypes />
                <Workouts />
                <LenthOfWorkout />
                <CaloriesPerHour />
            </div>
        )
    }
}