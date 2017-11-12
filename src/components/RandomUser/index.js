import React, { Component } from 'react';

import { LinkContainer } from 'react-router-bootstrap'

import TextField from 'material-ui/TextField'
import {Button} from 'reactstrap'
import './RandomUser.css';

import UserProfile from '../UserProfile'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: '',
      profile: false
    }
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onNumberChange(e){
    e.preventDefault();
    this.setState({
      num: e.target.value,
      profile: false
    })
  }

  onFormSubmit(e){
    e.preventDefault();
    this.setState({
      profile: true
    })
  }

  render() {
    let profile = this.state.profile
    if(!profile) {
    return (
        <div className="App">
        <LinkContainer to="/work">
          <Button outline color="secondary" id="back">Back</Button>
        </LinkContainer>
        <h1>Random User Generator</h1>
        <h3>How many users would you like?</h3>
            <TextField id="userinput" type="number" value={this.state.num} onChange={this.onNumberChange}/>
            <Button outline color="secondary" onClick={this.onFormSubmit}>Submit</Button>
        </div>
    )
  } else {
      return (

          <div className="App">
          <LinkContainer to="/work">
            <Button outline color="secondary" id="back">Back</Button>
          </LinkContainer>
          <h1>Random User Generator</h1>
          <h3>How many users would you like?</h3>
              <TextField id="userinput" type="number" value={this.state.num} onChange={this.onNumberChange}/>
              <Button outline color="secondary" onClick={this.onFormSubmit}>Submit</Button>
            <UserProfile number={this.state.num}/>
          </div>

      )
    };
  }
}

export default App;
