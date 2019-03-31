import React, { Component } from 'react'
import Workout from '../Workout/Workout'
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: this.props.inventory
    }
  }

  deleteWorkout = id => {
    axios.delete(`/api/workout/${id}`).then(res => {
      this.setState({
        inventory: res.data
      })
      this.props.getMethod()
    }).catch(err => console.log('delete error', err))
  }

  render() {
    return (
      <div className="workout_list">
        {this.props.inventory.map((workout, i) => <Workout key={i} workout={workout} deleteWorkoutFn={this.deleteWorkout} onEditClick={this.props.onEditClick}/>)}
      </div>
    )
  }
}

export default Dashboard
