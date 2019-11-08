import React, { Component } from 'react'
import ExcersizeTypes from './ExcersizeTypes'


const workouts = {
    land: [
		'walking',
      	'running'
	],
  	water: [
    	'swimming',
          'surfing'
      ]
}


export default class Excersizes extends Component {
    render() {
        return (
            <div>
            <ExcersizeTypes />
            </div>
        )
    }
}