import React, { Component } from 'react'
import workouts from '../api.js'


export default class Workouts extends Component {
    state = {
        workouts: workouts,
    }
    
    
    handleChange = e => {
        console.log(e.target.value)
    };
    render() {
        // const caloriesBurned = this.workouts.caloriesPerHour
        // const workoutLength = this.

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
                <br />

                <label htmlFor='workouts'>Now choose a workout: </label>
                <br />
                <select id="workouts" onChange={this.handleChange}>
                    {this.state.workouts.map((workout) => {
                        return (
                            <option value={workout.caloriesPerHour}>{workout.activity}</option>
                        )
                    })}
                </select>
                <br />
                <label htmlFor="lengthOfWorkout">How long did you workout?</label>
                <br />
                <select id="lengthOfWorkout" onChange={this.handleChange}>
                    <option value="">--Please choose one--</option>
                    <option onChange={this.handleChange} value=".5">30 Miniutes</option>
                    <option onChange={this.handleChange} value="1">1 Hour</option>
                    <option onChange={this.handleChange} value="1.5">1 Hour 30 Miniutes</option>
                    <option onChange={this.handleChange} value="2">2 Hour</option>
                    <option onChange={this.handleChange} value="2.5">2 Hour 30 Miniutes</option>
                    <option onChange={this.handleChange} value="3">3 Hour</option>
                    <option onChange={this.handleChange} value="3.5">3 Hour 30 Miniutes</option>
                    <option onChange={this.handleChange} value="4">4 Hour</option>
                </select>
                
            </div>
        )
    }
}