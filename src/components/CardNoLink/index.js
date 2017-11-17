import React, { Component } from 'react'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import './Card.css'

class ProjCardNoLink extends Component {

  constructor(props){
    super(props);
    this.state = {
      display:false
    }
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver(){
    console.log('mouse over');
    this.setState({
      display: true
    })
  }

  render(){
    const styles = {
      'true': {
        display:'visible'
      },
      'false':{
        display:'none'
      }
    }
        return (
          <div onMouseOver={this.onMouseOver}>
          <Card>

            <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} overlayContainerStyle={styles[this.state.display ? 'true' : 'false' ]}>
              <img src={this.props.pic} alt="" />
            </CardMedia>
              <CardTitle title={this.props.title} subtitle={this.props.sub} titleStyle={this.props.titleStyle} />
            <CardText>
              {this.props.text}
            </CardText>

          </Card>
          </div>
        )

  }
}


export default ProjCardNoLink;
