import React, { Component } from 'react'

export default class SubmitNewWorkout extends Component {
    render() {
        return (
            <div>
                <h1>Submit a new workout</h1>
                <form onSubmit={}>
                <input type="text" name="name" placeholder="Name of workout" />
                <input type="text" name="type" placeholder="Type of workout" />
                <input type="number" name="caloriesPerHour" placeholder="Calories burned per hour" />
                <button type="submit">Send Request</button>
                </form>
            </div>
        )
    }
}
