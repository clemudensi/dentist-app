// <<<<<<< HEAD
// require('bootstrap/dist/css/bootstrap.css');
//
// import App from './App';
// import PatientForm from './components/PatientForm'
// import PatientProfile from './components/PatientProfile'
// import DoctorsList from './components/DoctorsList'
// import Header from './components/Header'
// import { HashRouter as Router, Route} from 'react-router-dom';
//
//
//
// class Index extends React.Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <div>
//             <Header />
//             <Route exact path="/" component={App}/>
//             <Route exact path="/patientform" component={PatientForm}/>
//             <Route exact path="/patientprofile" component={PatientProfile}/>
//             <Route exact path="/doctors" component={DoctorsList}/>
//           </div>
//         </Router>
//       </div>
//     )
//   }
// }
//
//
// ReactDOM.render(
//   <Index />,
//   document.getElementById('root')
// );
// =======
import React from 'react';
// import ReactDOM from 'react-dom';
import _ from 'lodash';
import AptList from './AptList';
import AddAppointment from './AddAppointment'
import SearchAppointments from './SearchAppointments';
import axios from 'axios';

require('bootstrap/dist/css/bootstrap.css');

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

    componentDidMount() {
        let that = this;
        let myAppointments = 'https://dentist-directory-1c7d3.firebaseio.com/dentist.json';
        axios.get(myAppointments)
            .then( (response)=> {
                console.log(response.data)
                that.setState({myAppointments: response.data});
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    // componentWillUnmount() {
    //     this.serverRequest.abort();
    // }

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
        this.setState({
            myAppointments: tempItem
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


        let appArr = [];
        for (var item in myAppointments) {
            appArr.push(myAppointments[item])
        }

        appArr.map((item, index) => {
            if (item.name.toLowerCase().includes(queryText) ||
                item.email.toLowerCase().includes(queryText) ||
                item.phoneNumber.includes(queryText)
            ) {
                filteredApts.push(item);
            }
        });

        filteredApts = _.orderBy(filteredApts, item => item[orderBy], orderDir);

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

export default MainInterface; //render
