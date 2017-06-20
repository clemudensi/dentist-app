import React, { Component } from 'react';
import axios from 'axios';

class AptList extends Component{
    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(e) {
        e.preventDefault();
        console.log(this.props.singleItem.key);
        let result = confirm("Are you sure you want to delete?");
        if (result) {
            console.log(this);
            let aptList = this.props.onDelete(this.props.singleItem);
            console.log(this.props.singleItem, "This is singleItem");
            console.log(this.props.whichItem, "This is whichItem");

            let myAppointments = 'https://dentist-directory-1c7d3.firebaseio.com/dentist/'+this.props.singleItem.key+'.json';
            axios.delete(myAppointments)
                .then(function (response) {
                    console.log(response, "Response");
                    console.log(aptList, "aptList")
                })
        }
    }

    render() {

        console.log('trial singleItem', this.props.singleItem.name, this.props.singleItem.key);
        return(
            <li className="pet-item media">
                <div className="media-left">
                    <button className="pet-delete btn btn-xs btn-danger" onClick={() => this.handleDelete(event, this.props.singleItem.key)}>
                        <span className="glyphicon glyphicon-remove"></span></button>
                </div>
                <div className="pet-info media-body">
                    <div className="pet-head">
                        <span className="pet-name">{this.props.singleItem.name}</span>
                        <span className="apt-date pull-right">{this.props.singleItem.aptDate}</span>
                    </div>
                    <div className="owner-name"><span className="label-item">Phone number:</span>
                        {this.props.singleItem.phoneNumber}</div>
                    <div className="owner-name"><span className="label-item">Email:</span>
                        {this.props.singleItem.email}</div>
                    <div className="apt-notes">{this.props.singleItem.aptNotes}</div>
                </div>
            </li>
        ) // return
    } // render
} //AptList

export default AptList;
