import React, { Component } from 'react';
import t from 'tcomb-form';

class PatientForm extends Component {
  render() {

    const Form = t.form.Form;

    const Gender = t.enums({
      M: 'Male',
      F: 'Female'
    })
    const FormInput = t.struct({
      name: t.String,
      surname: t.String,
      email: t.maybe(t.String),
      number: t.String,
      age: t.Number,
      // gender: Gender,
      birthDate: t.Date,
      address: t.String,




    })
    return (
      //Name, Email, Phone number, date of birth, address
      <div>
        <Form
          ref="form"
          type="FormInput"
        />
        <button>Save</button>
      </div>
    )
  }
}

export default PatientForm;
