import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');

import App from './App';
import PatientForm from './components/PatientForm'
import PatientProfile from './components/PatientProfile'
import DoctorsList from './components/DoctorsList'
import Header from './components/Header'
import { HashRouter as Router, Route} from 'react-router-dom';



class Index extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={App}/>
            <Route exact path="/patientform" component={PatientForm}/>
            <Route exact path="/patientprofile" component={PatientProfile}/>
            <Route exact path="/doctors" component={DoctorsList}/>
          </div>
        </Router>
      </div>
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
