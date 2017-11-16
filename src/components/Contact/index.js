import React, {Component} from 'react';
import EasyTransition from 'react-easy-transition'

import { Button } from 'reactstrap'

import './Contact.css'

class Contact extends Component {

  render () {
    return (
      <EasyTransition
      path={"/"}
      initialStyle={{opacity: 0}}
      transition="opacity 0.3s ease-in"
      finalStyle={{opacity: 1}}
  >
      <div className="About" >
        <h1 className="display-3">Get in touch</h1>
        <div id="btnContainer">
          <a target="_blank" href="https://www.linkedin.com/in/leigh-white/"><Button id="btn" outline color="secondary"><i style={{marginRight: '3px'}} class="fa fa-linkedin-square"></i>LinkedIn</Button></a>
          <a target="_blank" href="https://github.com/leighwhite96"><Button id="btn" outline color="secondary"><i style={{marginRight: '3px'}} class="fa fa-github"></i>GitHub</Button></a>
        </div>
      </div>
      </EasyTransition>
    )
  }
}

export default Contact;
