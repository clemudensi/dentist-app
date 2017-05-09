import React from 'react';

class AddAppointment extends React.Component {

    constructor() {
        super();
        this.toggleAptDisplay = this.toggleAptDisplay.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        // this.validateAppointments = this.validateAppointments.bind(this);
    }

    toggleAptDisplay() {
        this.props.handleToggle();
    }

    handleAdd(ev) {
        ev.preventDefault();
        var tempApt={
            petName: this.refs.inputPetName.value,
            ownerName: this.refs.inputOwnerName.value,
            aptDate: this.refs.inputAptDate.value + ' ' + this.refs.inputAptTime.value,
            aptNotes: this.refs.inputAptNotes.value
        };
        this.props.addApt(tempApt);
        ev.target.reset();
        // const validateAppointments = this.validateAppointments(ev);
        // if (ev.length < 0){
        //     return "Please Create an appointment"
        // }
    }

    clearForm(ev) {
        this.refs.addForm.reset();
        this.refs.inputPetName.focus();
    }

    // validateAppointments(ev){
    //     if(ev.length < 1){
    //         return 'Please Schedule an Appointment'
    //     }
    // }

    render() {

        var displayAptBody={
            display: this.props.bodyVisible ? 'block' : 'none'
        };

        return(
            <div className="panel panel-primary">
              <div className="panel-heading apt-addheading" onClick={ this.toggleAptDisplay }>
                <span className="glyphicon glyphicon-plus"></span> Add Appointment</div>
              <div className="panel-body" style={ displayAptBody }>
                <form className="add-appointment form-horizontal" ref="addForm" onSubmit={this.handleAdd}>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Patient Name</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"
                             id="petName" ref="inputPetName" placeholder="Patients Name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Phone number</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"
                             id="petOwner" ref="inputOwnerName" placeholder="Phone number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Date</label>
                    <div className="col-sm-4">
                      <input type="date" className="form-control"
                             id="aptDate" ref="inputAptDate" />
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
                      <button type="submit" className="btn btn-primary pull-right">Add Appointment</button>
                      {/*<button type="button" className="btn btn-primary pull-left" onClick={this.clearForm}>Clear Form</button>*/}
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-sm-offset-2 col-sm-10 padding-top">
                      <button type="button" className="btn btn-danger pull-left" onClick={this.toggleAptDisplay}>Close</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        )//return
    } //render
} // AddAppointment

export default AddAppointment;
