import React, { Component } from 'react'
import ExcersizeTypes from './ExcersizeTypes'


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
    render() {
        return (
            <div>
                <ExcersizeTypes />
            </div>
        )
    }
}