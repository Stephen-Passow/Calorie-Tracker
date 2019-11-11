// import React, { Component } from 'react';

// export default class Workouts extends Component {
//     render() {
//         console.log('prop: ', this.props.workouts)
//         return (
//             <div>
//                 <h1>Now choose the workout you will be doing!</h1>
//                 <select id="workouts">
//                     {this.props.workouts.map(item => {
//                     console.log({item})
//                          return <option value={item}>{item}</option>
//                         })}
//                 </select>
//             </div>
//         );
//     }
// }

import React, { Component } from 'react'

export default class Workouts extends Component {
    state = {
        exerciseType: "sports"
    }
    // getWorkouts() {
    //     return workouts[this.state.exerciseType];
    // }


    handleChange = e => {
        console.log(e.target.type)
    };
    render() {

        const workouts = [
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
            }
        ]

        const firstDDValue = '';
        const timeDDValue = 1.5;
        
        const filteredWorkouts = workouts.filter(item => item.type === firstDDValue);
        
        
        filteredWorkouts.map((item) => {
            return <p> {item.caloriesPerHour * timeDDValue} </p>;
        })


        return (
            <div>
                <label htmlFor='workouts'>Now choose a workout: </label>
                <select onChange={this.handleChange} id="workouts">
                <option></option>
                    </select>
            </div>
        )
    }
}