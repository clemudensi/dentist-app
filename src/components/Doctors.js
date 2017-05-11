import React, { Component } from 'react';

class Doctors extends Component {
  render() {
    console.log(this.props.doctorsList)
    let doctorsList = this.props.doctorsList;

    return (
      <div>
        {doctorsList.map(doctor => {
          return (
            <ul>
              <li>{doctor.name}</li>
              <li>{doctor.email}</li>
              <li>{doctor.phoneNumber}</li>
            </ul>
          )
        })}

      </div>
    )
  }
}


export default Doctors;
