import React, { Component } from 'react'
import ExcersizeTypes from './ExcersizeTypes'
import Workouts from './Workouts'
import LenthOfWorkout from './LenthOfWorkout'


const workouts = {
    onFoot: [
        'walking',
        'running',
        'hiking'
    ],
    sports: [
        'basketball',
        'football',
        'pingPing',
        'soccer'
    ],
    cycling: [
        'mountainBiking',
        'trailRiding',
        'streetRiding'
    ]
};


export default class Excersizes extends Component {
    state = {
        exerciseType: "sports"
    }
    // setExcersize() {
    //     return 
    // }
    getWorkouts() {
        return workouts[this.state.exerciseType];
    }

    render() {
        return (
            <div>
                <h1>Calorie Counter!</h1>
                <ExcersizeTypes />
                <Workouts workouts={this.getWorkouts()} />
                <LenthOfWorkout />
            </div>
        )
    }
}