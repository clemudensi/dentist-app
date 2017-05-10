import React, { Component } from 'react';
import HTTP from '../services/http';
import Doctors from './Doctors'

class DoctorsList extends Component {
  constructor() {
    super();
    this.state = {
      doctors: []
    }
  }

  componentWillMount() {
    HTTP.get('./dentist.json')
    .then(data => {
      console.log(data)
      if (data) {
        this.setState({
          doctors: data
        })
      }
    })
  }

  render() {
    let doctors = this.state.doctors;
    // console.log('DOCTORS', doctors)
    let doctorsList = []
    if (doctors) {
      for (var item in doctors) {
       doctorsList.push(doctors[item]);
      }
    }

    return (
      doctorsList ?
      <div>
        <Doctors doctorsList={doctorsList}/>
      </div>
      : <div>Loading...</div>
      // <ul>
      //   <li>{doctorsList.email}</li>
      //   <li>{doctorsList.name}</li>
      //   <li>{doctorsList.phoneNumber}</li>
      // </ul> : <div>Loading...</div>
    )
  }
}

export default DoctorsList;
