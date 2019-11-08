import React, { Component } from 'react'
import ExcersizeTypes from './ExcersizeTypes'
import Workouts from './Workouts'


const workouts = {
    onFoot: [
        'walking',
        'running',
        'hiking'
    ],
    water: [
        'swimming',
        'surfing'
    ],
    cycling: [
        'mountainBiking',
        'trailRiding',
        'streetRiding'
    ]
};


export default class Excersizes extends Component {
    state = {
        exerciseType: 'onFoot'
    }

    getWorkouts() {
        return workouts[this.state.exerciseType];
    }

    render() {
        return (
            <div>
                <h1>HOME</h1>
                <ExcersizeTypes />
                <Workouts workouts={this.getWorkouts()} />
            </div>
        )
    }
}