import React, {Component} from 'react';
import {Card, CardTitle, CardMedia, CardText} from 'material-ui';

import BigProjCard from '../BigProjCard';

class ProjCardNoLink extends Component {

  constructor(props){
    super(props);
    this.state = {
      display:false,
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

  render(){
    if(!this.props.bigCard){
    return (
      <div id="proj" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseExit} onClick={this.props.onClick}>
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
    )
  } else {
    return (
      <BigProjCard />
    )
  }

}
}

export default ProjCardNoLink;
