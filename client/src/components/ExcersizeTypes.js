import React, { Component } from 'react'

export default class ExcersizeTypes extends Component {

    handleChange = e => {
        console.log(e.target.value)
    };

    render() {
        return (
            <div>
                <label htmlFor="workouts">Choose a workout type:</label>

                <select onChange={this.handleChange} name="" id="workouts">
                    <option value="">--Please choose an option--</option>
                    <option value="onFoot">On Foot</option>
                    <option value="water">Water</option>
                    <option value="cycling">Cycling</option>
                </select>
            </div>
        )
    }
}