import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import AptList from './AptList';
import AddAppointment from './AddAppointment'
import SearchAppointments from './SearchAppointments';
// import {get} from "jquery";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
require('bootstrap/dist/css/bootstrap.css');
// require('bootstrap/dist/js/bootstrap.min.js');
// require('jquery/dist/jquery.min.js');
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
//
//
// var React = require('react');
// var ReactDOM = require('react-dom');
// var _ = require('lodash');
//
// var AptList = require('./AptList');
// var AddAppointment = require('./AddAppointment');
// var SearchAppointments = require('./SearchAppointments');

class MainInterface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aptBodyVisible: false,
            orderBy: 'petName',
            orderDir: 'asc',
            queryText: '',
            myAppointments: []
        } //return
        this.deleteMessage = this.deleteMessage.bind(this);
        this.toggleAddDisplay = this.toggleAddDisplay.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onReOrder = this.onReOrder.bind(this);
    } //getInitialState

    componentDidMount(){
        this.serverRequest = fetch(`../public/data.json`)
            .then(result=>result.json())
            .then(myAppointments=>this.setState({myAppointments}))
    } //componentDidMount

    componentWillUnmount() {
        this.serverRequest.abort();
    } //componentWillUnmount

    deleteMessage(item) {
        let allApts = this.state.myAppointments;
        let newApts = _.without(allApts, item);
        console.log('deleting')
        this.setState({
            myAppointments: newApts
        }); //setState
    } //deleteMessage

    toggleAddDisplay() {
        let tempVisibility=!this.state.aptBodyVisible;
        this.setState({
            aptBodyVisible: tempVisibility
        }); //setState
    } //toggleAddDisplay

    addItem (tempItem) {
        let tempApts=this.state.myAppointments;
        tempApts.push(tempItem);
        this.setState({
            myAppointments: tempApts
        });
    }

    onReOrder(orderBy, orderDir) {
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        })
    }

    onSearch(query) {
        this.setState({
            queryText: query
        });
    }

    render() {
        let filteredApts = [];
        const orderBy = this.state.orderBy;
        const orderDir = this.state.orderDir;
        const queryText = this.state.queryText;
        const myAppointments = this.state.myAppointments;

        myAppointments.map(item => {
            if (item.petName.toLowerCase().includes(queryText) ||
                item.ownerName.toLowerCase().includes(queryText) ||
                item.aptDate.toLowerCase().includes(queryText) ||
                item.aptNotes.toLowerCase().includes(queryText)
            ) {
                filteredApts.push(item);
            }
        });

        filteredApts = _.orderBy(filteredApts, item => item[orderBy].toLowerCase(), orderDir);

        filteredApts = filteredApts.map((item, index) => //return
            <AptList key = { index }
                     singleItem = { item }
                     whichItem = { item }
                     onDelete={ this.deleteMessage } />); //filteredApts.map
        return (
            <div className="interface">
                <AddAppointment
                    bodyVisible = { this.state.aptBodyVisible }
                    handleToggle = { this.toggleAddDisplay }
                    addApt = { this.addItem }
                />
                <SearchAppointments orderBy = { this.state.orderBy }
                                    orderDir = { this.state.orderDir }
                                    onSearch = { this.onSearch }
                                    onReOrder = { this.onReOrder } />
                <ul className="item-list media-list">{filteredApts}</ul>
            </div>
        ) //return
    } //render
} //MainInterface

ReactDOM.render(
    <MainInterface />,
    document.getElementById('root')
); //render
