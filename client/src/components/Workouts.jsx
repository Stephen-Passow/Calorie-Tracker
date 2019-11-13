import React, { Component } from 'react'
import workouts from '../api.js'
import axios from 'axios'


export default class Workouts extends Component {
    state = {
        workouts: workouts,
        caloriesBurnt: ''
    }


    val = () => {
        const d = document.getElementById("lengthOfWorkout").value;
        const x = document.getElementById("workouts").value;

        const caloriesBurned = x * d

        this.setState({ caloriesBurnt: caloriesBurned })

    }

    sendapi = async () => {
        const newState = {
            caloriesBurnt: this.state.caloriesBurnt
        }

        await axios.post('/activityType', newState)
        if (this.state.caloriesBurnt === '' || 0) {
            alert("Please fill out all fields")
        } else {
            alert("Sent to your database!")
        }

    }

    render() {

        const unique = [...new Set(this.state.workouts.map(item => item.type))];

        return (
            <div>
                <select className="dropdown">
                    <option>---Select a type of workout</option>
                    {unique.map((workout) => {
                        return (

                            <option>
                                {workout}
                            </option>

                        )
                    })}
                </select>

                <br />

                <label className="labels" htmlFor='workouts'> </label>

                <br />
                <h2>Now choose a workout:</h2>
                <select id="workouts" className="dropdown" onChange={this.handleChange}>
                    <option>---Please Select an Option---</option>
                    {this.state.workouts.map((workout) => {
                        return (
                            <option value={workout.caloriesPerHour}>{workout.activity}</option>
                        )
                    })}
                </select>

                <br />

                <label className="labels" htmlFor="lengthOfWorkout"></label>
                <br />
                <h2>How long did you workout?</h2>
                <select id="lengthOfWorkout" className="dropdown" onChange={this.val}>

                    <option value="">--Please choose one--</option>
                    <option value=".5">30 Miniutes</option>
                    <option value="1">1 Hour</option>
                    <option onChange={this.handleChange} value="1.5">1 Hour 30 Miniutes</option>
                    <option onChange={this.handleChange} value="2">2 Hour</option>
                    <option onChange={this.handleChange} value="2.5">2 Hour 30 Miniutes</option>
                    <option onChange={this.handleChange} value="3">3 Hour</option>
                    <option onChange={this.handleChange} value="3.5">3 Hour 30 Miniutes</option>
                    <option onChange={this.handleChange} value="4">4 Hour</option>
                </select>
                <br />
                <h3>Calories Burned: {this.state.caloriesBurnt}</h3>
                <br />
                <button onClick={this.sendapi} className="btn" >Submit to your tracker</button>
            </div>
        )
    }
}