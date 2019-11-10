import React, { Component } from 'react'
import ExcersizeTypes from './ExcersizeTypes'
import Workouts from './Workouts'
import LenthOfWorkout from './LenthOfWorkout'

var workouts = [
    {
        activity: 'Soccer',
        caloriesPerHour: 100,
        type: 'sport'
    },
    {
        activity: 'Basketball',
        caloriesPerHour: 80,
        type: 'sport'
    },
    {
        activity: 'Ping Pong',
        caloriesPerHour: 80,
        type: 'sport'
    },
     {
        activity: 'Mountain Biking',
        caloriesPerHour: 120,
        type: 'cycling'
    },
    {
        activity: 'Street Biking',
        caloriesPerHour: 100,
        type: 'cycling'
    },
    {
        activity: 'hiking',
        caloriesPerHour: 120,
        type: 'onFoot'
    },
    {
        activity: 'running',
        caloriesPerHour: 100,
        type: 'onFoot'
    },
    {
    activity: 'walking',
    caloriesPerHour: 100,
    type: 'onFoot'
    }
]

var firstDDValue = 'sport';
var timeDDValue = 1.5;

var filteredWorkouts = workouts.filter(item => item.type === firstDDValue);

return filteredWorkouts.map(item => {
    // display on the html
    return <p> {item.intensityLevel * timeDDValue} </p>;

})
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