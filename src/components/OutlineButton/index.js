import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'reactstrap';

export default class OutlineButton extends Component {
  render() {
    return (
      <LinkContainer to={this.props.path}>
        <Button outline color={this.props.colour} onClick={this.props.onClick}>{this.props.btntext}</Button>
      </LinkContainer>
    );
  }
}
