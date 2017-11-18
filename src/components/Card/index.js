import React, {Component} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import './Card.css'

class ProjCard extends Component {
  constructor(props){
  super(props);
  this.state = {
    display:false
  }
  this.onMouseEnter = this.onMouseEnter.bind(this);
  this.onMouseExit = this.onMouseExit.bind(this);
}

onMouseEnter(){
  console.log('mouse enter');
  this.setState({
    display: true
  })
}

onMouseExit(){
  console.log('mouse exit');
  this.setState({
    display: false
  })
}

  render () {
    return(
    <LinkContainer to={this.props.path}>
    <div id="proj" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseExit}>
    <Card>
      {this.state.display
        ? <CardMedia overlay={<CardTitle
            title={this.props.title}
            subtitle={this.props.sub}
          />}
        >
          <img src={this.props.pic} alt="" />
        </CardMedia>
        : <CardMedia >
          <img src={this.props.pic} alt="" />
        </CardMedia>
      }


    </Card>
    </div>
    </LinkContainer>)
  }
}

export default ProjCard;
