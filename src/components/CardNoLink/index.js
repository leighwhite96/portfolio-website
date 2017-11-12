import React from 'react'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import './Card.css'

const ProjCardNoLink = (props) => {
  return (
    <div id="proj">
    <Card style={{height: '100%'}} >

      <CardMedia>
        <img src={props.pic} alt="" />
      </CardMedia>
        <CardTitle title={props.title} subtitle={props.sub} titleStyle={props.titleStyle} />
      <CardText>
        {props.text}
      </CardText>

    </Card>
    </div>
  )
}

export default ProjCardNoLink;
