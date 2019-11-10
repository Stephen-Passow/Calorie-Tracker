import React, { Component } from 'react'

export default class LenthOfWorkout extends Component {
    render() {
        return (
            <div className="lengthOfWorkout">
            <h3>Length of Workout</h3>
                
                <label htmlFor="lengthOfWorkout">How long did you workout?</label>

                <select id="lengthOfWorkout">
                    <option value="">--Please choose one--</option>
                    <option value=".5">30 Miniutes</option>
                    <option value="1">1 Hour</option>
                    <option value="1.5">1 Hour 30 Miniutes</option>
                    <option value="2">2 Hour</option>
                    <option value="2.5">2 Hour 30 Miniutes</option>
                    <option value="3">3 Hour</option>
                    <option value="3.5">3 Hour 30 Miniutes</option>
                    <option value="4">4 Hour</option>
                    </select>
            </div>
                )
            }
        }
