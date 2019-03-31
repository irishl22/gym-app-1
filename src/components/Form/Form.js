import React, { Component } from 'react'
import axios from 'axios';
import Amrap from '../Amrap/Amrap'
import Interval from '../Interval/Interval'
import Rft from '../Rft/rft'
import Chipper from '../Chipper/Chipper'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      style: '',
      time: 0,
      amrap: false,
      interval: false,
      rft: false,
      chipper: false,
      mv1: '',
      mv2: '',
      mv3: '',
      mv4: '',
      mv5: '',
      mv6: '',
      id: 0,
      fifteen: false,
      twenty: false,
      twentyFive: false,
      thirty: false
    }
    this.handleCheckBoxTime = this.handleCheckBoxTime.bind(this)

  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  
  handleCancelClick = () => {
    this.setState({
      style: '',
      time: 0,
      amrap: false,
      interval: false,
      rft: false,
      chipper: false,
      mv1: '',
      mv2: '',
      mv3: '',
      mv4: '',
      mv5: '',
      mv6: ''
    })
  }
 
handleCheckBox(prop, val) {
  this.setState({
    [prop]: val,
    style: prop
  });
}

handleCheckBoxTime(val) {
  this.setState({
    time: val
  });
}
  
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/workout', this.state)
      .then(res => {
        this.setState({
          style: '',
          time: 0,
          mv1: '',
          mv2: '',
          mv3: '',
          mv4: '',
          mv5: '',
          mv6: ''
        })
        this.props.getMethod()
      }).catch(err => console.log(err))
  }

  render() {
    return this.state.amrap ? (
      <div className="form">
        <Amrap workout={this.state} 
               handleCancelClick={this.handleCancelClick} 
               handleChange={this.handleChange} 
               handleSubmit={this.handleSubmit}
               handleCheckBoxTime={this.handleCheckBoxTime}/>
      </div>
        ) : this.state.interval ? (
      <div className="form">
        <Interval workout={this.state}
                  handleCancelClick={this.handleCancelClick} 
                  handleChange={this.handleChange} 
                  handleSubmit={this.handleSubmit}
/>
      </div>    
        ) : this.state.rft ? (
          <div className="form">
            <Rft workout={this.state}
                 handleCancelClick={this.handleCancelClick} 
                 handleChange={this.handleChange} 
                 handleSubmit={this.handleSubmit}
/>
          </div>
        ) : this.state.chipper ? (
          <div className="form">
            <Chipper workout={this.state}
                     handleCancelClick={this.handleCancelClick} 
                     handleChange={this.handleChange} 
                     handleSubmit={this.handleSubmit}
    />
          </div>
        ) : (
          <div className="default-form">
            <h5>Style</h5>
              <label>AMRAP
                <input type="radio" name="style" onClick={e => this.handleCheckBox("amrap", e.target.checked)} value={this.state.style}/>
              </label>
              <label>Interval
                <input type="radio" name="style" onClick={e => this.handleCheckBox("interval", e.target.checked)} value={this.state.style}/>
              </label>
              <label>RFT
                  <input type="radio" name="style" onClick={e => this.handleCheckBox("rft", e.target.checked)} value={this.state.style}/>
              </label>
              <label>Chipper
                  <input type="radio" name="style" onClick={e => this.handleCheckBox("chipper", e.target.checked)} value={this.state.style}/>
              </label>  

              <button onClick={this.handleSubmit}>Create Workout</button> 
              <button onClick={this.handleCancelClick}>Cancel</button>
          </div>
        )
        
      }
}

export default Form
