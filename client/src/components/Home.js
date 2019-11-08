import React, { Component } from 'react'
import ExcersizeTypes from './ExcersizeTypes'
import Workouts from './Workouts'


const workouts = {
    land: [
        'walking',
        'running',
        'hiking'
    ],
    water: [
        'swimming',
        'surfing'
    ]
};


export default class Excersizes extends Component {
    state = {
        exerciseType: 'land'
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