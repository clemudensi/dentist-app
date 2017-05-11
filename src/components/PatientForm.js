import React, { Component } from 'react';
import t from 'tcomb-form';


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
  gender: Gender,
  birthDate: t.Date, //Date field
  address: t.String
})
class PatientForm extends Component {
  constructor(){
    super();
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }
  handleOnSubmit(e) {
    e.preventDefault();
    console.log('hello')
    var value = this.refs.form.getValue();
    if (value) {
      console.log(value)
    }
  }
  render() {
    const userFormStyle = {
      container: {
        width: '50%',
        margin: '0 auto'
      }
    }
    let { container } = userFormStyle;


    return (
      <div style={container}>
        <Form
          ref="form"
          type={FormInput}

        />
        <button type="submit" onClick={this.handleOnSubmit} className="btn btn-primary">Save</button>
      </div>
    )
  }
}

export default PatientForm;
