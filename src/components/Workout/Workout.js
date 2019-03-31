import React, { Component } from 'react'

class Workout extends Component {
    constructor(props){
        super(props)

        this.state = {
    
        } 
    }

    onDeleteClick = () => {
      this.props.deleteWorkoutFn(this.props.workout.id)
    }
    
  render() {
    return (
      <div className="workout">
          <h5>{this.props.workout.style}</h5>
          <h5>{this.props.workout.time}</h5>
          <h5>{this.props.workout.mv1}</h5>
          <h5>{this.props.workout.mv2}</h5>
          <h5>{this.props.workout.mv3}</h5>
          <h5>{this.props.workout.mv4}</h5>
          <h5>{this.props.workout.mv5}</h5>
          <h5>{this.props.workout.mv6}</h5>
          <div className='edit-delete-button'>
            <button className="button_d" onClick={this.onDeleteClick}>Delete</button>
            <button onClick={this.props.onEditClick}>Edit</button>
          </div>
      </div>
    )
  }
}

export default Workout