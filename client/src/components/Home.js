import React, { Component } from 'react'
import ExcersizeTypes from './ExcersizeTypes'
import Workouts from './Workouts'
import LenthOfWorkout from './LenthOfWorkout'

export default class Excersizes extends Component {
    state = {
        exerciseType: "sports"
    }
    render() {
        return (
            <div>
                <h1>Calorie Counter App!</h1>
                <ExcersizeTypes />
                <Workouts />
                <LenthOfWorkout />
            </div>
        )
    }
}