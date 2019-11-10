import React, { Component } from 'react';

export default class Workouts extends Component {
    render() {
        console.log('prop: ', this.props.workouts)
        return (
            <div>
                <h1>Workouts </h1>
                <select name="" id="workouts">
                    {this.props.workouts.map(item => {
                    console.log({item})
                         return <option value={item}>{item}</option>
                        })}
                </select>
            </div>
        );
    }
}
