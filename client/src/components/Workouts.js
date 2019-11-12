import React, { Component } from 'react'

export default class Workouts extends Component {
    state = {
        workouts: [
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
                activity: 'Trail Riding',
                caloriesPerHour: 140,
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
            },
        ]
    }

    handleChange = e => {
        console.log(e.target.type)
    };
    render() {
        const allWorkouts = this.state.workouts.map(item => item.activity)

        const unique = [...new Set(this.state.workouts.map(item => item.type))];
        return (
            <div>
                <select>
                    {unique.map((workout) => {
                        return (
                            <option>
                                {workout}
                            </option>
                        )
                    })}
                </select>
                <label htmlFor='workouts'>Now choose a workout: </label>
                <select id="workouts">
                    {allWorkouts.map(((workout) => {
                        return (
                            <option>{workout}</option>
                        )
                    }))}

                </select>
            </div>
        )
    }
}