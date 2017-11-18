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

/*<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
