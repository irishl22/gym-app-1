import React, { Component } from 'react'

class Amrap extends Component {
    constructor(props) {
        super(props);

        this.state = {
          time: this.props.workout.time
            
        }
    }

  render() {
    return (
      <div>
        <h5>AMRAP:</h5>

        <label>15 min
          <input type="radio" name="time" onClick={() => this.props.handleCheckBoxTime(15)} value={this.state.time}/>
        </label>
        <label>20 min
          <input type="radio" name="time" onClick={() => this.props.handleCheckBoxTime(20)} value={this.state.time}/>
        </label>
          <label>25 min
            <input type="radio" name="time" onClick={() => this.props.handleCheckBoxTime(25)} value={this.state.time}/>
          </label>
          <label>30 min
            <input type="radio" name="time" onClick={() => this.props.handleCheckBoxTime(30)} value={this.state.time}/>
          </label>

        <h5>Exercise 1</h5>
        <input name="mv1" value={this.props.workout.mv1} type="text" onChange={this.props.handleChange}/>
        <h5>Exercise 2</h5>
        <input name="mv2" value={this.props.workout.mv2} type="text" onChange={this.props.handleChange}/>
        <h5>Exercise 3</h5>
        <input name="mv3" value={this.props.workout.mv3} type="text" onChange={this.props.handleChange}/>
        <h5>Exercise 4</h5>
        <input name="mv4" value={this.props.workout.mv4} type="text" onChange={this.props.handleChange}/>
        <h5>Exercise 5</h5>
        <input name="mv5" value={this.props.workout.mv5} type="text" onChange={this.props.handleChange}/>
        <h5>Exercise 6</h5>
        <input name="mv6" value={this.props.workout.mv6} type="text" onChange={this.props.handleChange}/>

        <button className="button_c" onClick={this.props.handleSubmit}>Create Workout</button> 
        <button onClick={this.props.handleCancelClick}>Cancel</button>
      </div>
    )
  }
}

export default Amrap
