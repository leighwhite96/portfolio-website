import React, {Component} from 'react';
import LinearProgress from 'material-ui/LinearProgress'

import {Button} from 'reactstrap'

class Quote extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      quote: '',
      author: ''
    }
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxy + "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en")
    .then(results => results.json()
    )
    .then(data => {
      let quote = data.quoteText;
      let author = data.quoteAuthor
      console.log(quote);
      console.log(author);
      this.setState({
        loading: false,
        quote,
        author
      })
  })
  .catch(e => {
    console.log(e);
    return e;
  })
  }

  getQuote() {
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxy + "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en")
    .then(results => results.json()
    )
    .then(data => {
      let quote = data.quoteText;
      let author = data.quoteAuthor
      if(!author){
        let author = 'Anon'
      }

      console.log(quote);
      console.log(author);
      this.setState({
        loading: false,
        quote,
        author
      })
  })
  .catch(e => {
    if(e){
    let quote = "Something went wrong, please try again";
    this.setState({
      quote,
      author: ''
    })
  }
})}

  render () {
    const style = {
      padding: '5px',
      paddingBottom: '10px',
      borderRadius: '2%',
      minWidth: '100%',
      maxHeight: '50%',
      boxShadow: '1px 1px 1px 1px gray',
      marginTop: '5px',
      fontSize: '12px',
      textAlign: 'center'
    }
    const barStyle = {
      width: '100%',
      marginTop: '5px'
    }
    const btnStyle = {
      fontSize: '10px',
      marginTop: '5px',
      width: '35%'
    }
    if(!this.state.loading){
      return (
        <div style={style} >
          <h5>Quote of the day</h5>
          <p style={{fontStyle: 'italic'}}>{this.state.quote}</p>
          <h6>{this.state.author}</h6>
          <hr style={{width: '30px'}}/>
          <span style={{fontStyle: 'italic'}}>Don't like this quote?</span><br/>
          <Button style={btnStyle} outline color="secondary" onClick={this.getQuote}>Get a new quote</Button>
        </div>
      )
    } else {
      return (
        <div style={style} >
          <h5>Quote of the day</h5>
          <div style={barStyle}><LinearProgress mode="indeterminate"/></div>
        </div>
      )
    }
  }}



export default Quote;
