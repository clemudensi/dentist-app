import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');

import App from './App';
import { HashRouter as Router, Route} from 'react-router-dom';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={App}/>
        </Router>
      </div>
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
