import React, { Component } from 'react'

export default class Workouts extends Component {
    state = {
        exerciseType: "sports",
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
            {
                activity: 'swimming',
                caloriesPerHour: 100,
                type: 'swimming'
            }
        ]
    }

    handleChange = e => {
        console.log(e.target.type)
    };
    render() {
        // const firstDDValue = [];
        // const timeDDValue = 1.5;

        // const filteredWorkouts = workouts.filter(item => item.type  = firstDDValue);
        
        
        // filteredWorkouts.map((item) => {
            //     return <p> {item.caloriesPerHour * timeDDValue} </p>;
            // })

            
            const unique = [...new Set(this.state.workouts.map(item => item.type))];
        return (
            <div>
                <select>
                    {unique.map((workout) => {
                        return(
                            <option>
                                {workout}
                            </option>
                        )
                    })}
                </select>
           
                {/* <label htmlFor='workouts'>Now choose a workout: </label>
                <select onChange={this.handleChange} id="workouts">
                    <option>{this.firstDDValue}</option>
                </select> */}
            </div>
        )
    }
}