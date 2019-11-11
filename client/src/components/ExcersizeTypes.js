import React, { Component } from 'react'

export default class ExcersizeTypes extends Component {
    

    handleChange = e => {
        console.log(e.target.value)
    };

    render() {
        return (
            <div>
                <label htmlFor="activities">First choose a type of excersize:  </label>

                <select onChange={this.handleChange} id="activities">
                    <option value="">--Please choose an option--</option>
                    <option value="onFoot">On Foot</option>
                    <option value="sports">Sports</option>
                    <option value="cycling">Cycling</option>
                </select>
            </div>
        )
    }
}