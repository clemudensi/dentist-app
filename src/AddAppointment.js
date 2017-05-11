import React from 'react';
import axios from 'axios';

class AddAppointment extends React.Component {

    constructor() {
        super();
        this.toggleAptDisplay = this.toggleAptDisplay.bind(this);
        this.handleAdd = this.handleAdd.bind(this);

    }

    toggleAptDisplay() {
        this.props.handleToggle();
    }

    handleAdd(ev) {
        ev.preventDefault();
        console.log('yesssss')

        var tempApt={
            name: this.refs.inputName.value,
            phoneNumber: this.refs.inputPhoneNumber.value,
            email: this.refs.inputEmail.value ,
            aptNotes: this.refs.inputAptNotes.value,
            aptDate: this.refs.inputAptDate.value + ' ' + this.refs.inputAptTime.value,
        };

        this.props.addApt(tempApt);
        ev.target.reset();
        let myAppointments = 'https://dentist-directory-1c7d3.firebaseio.com/dentist.json';
        axios.post(myAppointments, tempApt)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    clearForm(ev) {
        this.refs.addForm.reset();
        this.refs.inputName.focus();
    }

    render() {

        var displayAptBody={
            display: this.props.bodyVisible ? 'block' : 'none'
        };

        var style = {
            paddingTop: 50
        };

        var decor ={
            backgroundColor: '#126753',
            borderColor: '#126753'
        };

        return(
            <div className="container" style={style}>
            <div className="panel panel-primary" style={decor}>
                <div className="panel-heading apt-addheading" onClick={ this.toggleAptDisplay } style={decor}>
                    <span className="glyphicon glyphicon-plus"></span> Add Appointment</div>
                <div className="panel-body" style={ displayAptBody }>
                    <form className="add-appointment form-horizontal" ref="addForm" onSubmit={this.handleAdd}>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Patient Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                       id="petName" ref="inputName" placeholder="Patients Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Phone number</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                       id="petOwner" ref="inputPhoneNumber" placeholder="Phone number" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control"
                                       id="aptDate" ref="inputEmail" />
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Date</label>
                                <div className="col-sm-4">
                                    <input type="date" className="form-control"
                                           id="aptDate" ref="inputAptDate" />
                                </div>
                            </div>
                            <label className="col-sm-2 control-label">Time</label>
                            <div className="col-sm-4">
                                <input type="time" className="form-control"
                                       id="aptTime" ref="inputAptTime" />
                            </div>

                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Apt. Notes</label>
                            <div className="col-sm-10">
                <textarea className="form-control" rows="4" cols="50"
                          id="aptNotes" ref="inputAptNotes" placeholder="Appointment Notes"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-primary pull-right" >Add Appointment</button>
                                {/*<button type="button" className="btn btn-primary pull-left" >Clear Form</button>*/}
                                <button type="button" className="btn btn-danger pull-left" onClick={this.toggleAptDisplay}>Close</button>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-sm-offset-2 col-sm-10 padding-top">

                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )//return
    } //render
} // AddAppointment

export default AddAppointment;
