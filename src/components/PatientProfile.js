import React, { Component } from 'react';
import HTTP from '../services/http';

class PatientProfile extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        email: '',
        name: '',
        phoneNumber: ''
      }
    }

  }
  componentWillMount() {
    HTTP.get('/patient.json')
    .then(data => {
      if (data) {
        this.setState({
          userDetails: data.someKey
        })
      }
    })
  }

  render() {
    const userDetailsStyle = {
      container: {
        width: '30%',
        backgroundColor: 'tomato',
        borderRadius: 5,
        margin: '0 auto',
        textAlign: 'center'
      }
    }
    let userDetails = this.state.userDetails
    let { container } = userDetailsStyle;
    return (
      userDetails ?
                        <div style={container}>
                          <h2>{userDetails.name}</h2>
                          <h5>{userDetails.phoneNumber}</h5>
                          <h6>{userDetails.email}</h6>
                        </div>
                        :
                        <h3>Loading...</h3>
    )
  }
}

export default PatientProfile;
