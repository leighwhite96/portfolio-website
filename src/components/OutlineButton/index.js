import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'reactstrap';


import './OutlineButton.css'

export default class OutlineButton extends Component {
  render() {
    return (
      <LinkContainer to={this.props.path}>
        <Button id= "btn" outline color={this.props.colour} onClick={this.props.onClick}>{this.props.btntext}</Button>
      </LinkContainer>
    );
  }
}
