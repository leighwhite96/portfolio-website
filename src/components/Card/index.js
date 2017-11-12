import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import './Card.css'

const ProjCard = (props) => {
  return (
    <LinkContainer to={props.path}>
    <div id="proj">
    <Card style={{height: '100%'}}>

      <CardMedia>
        <img src={props.pic} alt="" />
      </CardMedia>
        <CardTitle title={props.title} subtitle={props.sub} titleStyle={props.titleStyle}/>
      <CardText>
        {props.text}
      </CardText>

    </Card>
    </div>
    </LinkContainer>
  )
}

export default ProjCard
