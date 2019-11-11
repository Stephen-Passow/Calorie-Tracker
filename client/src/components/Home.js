import React, { Component } from 'react'
import ExcersizeTypes from './ExcersizeTypes'
import Workouts from './Workouts'
import LenthOfWorkout from './LenthOfWorkout'

export default class Excersizes extends Component {
    state = {
        exerciseType: "sports"
    }
    // setExcersize() {
    //     return 
    // }
    

    render() {
        return (
            <div>
                <h1>Calorie Counter!</h1>
                <ExcersizeTypes />
                <Workouts /*workouts={this.getWorkouts()}*/ />
                <LenthOfWorkout />
            </div>
        )
    }
}