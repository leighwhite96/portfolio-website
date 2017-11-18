import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {
  BrowserRouter as Router
} from 'react-router-dom'

const Page = () => {
  return (
    <MuiThemeProvider>
      <Portfolio />
    </MuiThemeProvider>
  )
}

ReactDOM.render(<Router><Page /></Router>, document.getElementById('root'));
/*
TODO: Drag and drop icons
TODO: Web-scraping implementation
TODO: make responsive when landscape on mobile (projects)
TODO: actually write about yourself and your projects
TODO: figure out how to just make material ui card transparent
TODO: display quote better
TODO: add picture 
*/
