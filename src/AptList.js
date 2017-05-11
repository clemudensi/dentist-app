import React, { Component } from 'react';

class AptList extends Component{
    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        let result = confirm("Are you sure you want to delete?");
        if (result) {
            console.log(this)
            this.props.onDelete(this.props.whichItem)
        }

    }

    render() {
        return(
            <li className="pet-item media">
                <div className="media-left">
                    <button className="pet-delete btn btn-xs btn-danger" onClick={this.handleDelete}>
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
                    <div className="apt-notes"><span className="label-item">Apt Notes:</span>
                        {this.props.singleItem.aptNotes}</div>
                </div>
            </li>
        ) // return
    } // render
} //AptList

export default AptList;
