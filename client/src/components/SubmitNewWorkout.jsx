import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class SubmitNewWorkout extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <h1>Submit a new workout</h1>
                {/* <form onSubmit={}> */}
                <input type="text" name="name" placeholder="Name of workout" />
                <input type="text" name="type" placeholder="Type of workout" />
                <input type="number" name="caloriesPerHour" placeholder="Calories burned per hour" />
                <button type="submit">Send Request</button>
                {/* </form> */}
                <Link to='/'>Back to home page</Link>
            </div>
        )
    }
}
