import React from 'react';

import {Link, NavLink} from 'react-router-dom';


class Navlink extends React.Component {
    render() {


        return (
            <div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-center w3l-effect">
                        <li><Link to="/"><span>Home</span></Link></li>
                        <li><NavLink activeClassName={'scroll'} to='/about'>About</NavLink></li>
                        <li><NavLink activeClassName={'scroll'} to='/bookApt'>Book Appointment</NavLink></li>
                        <li><NavLink activeClassName={'scroll'} to='/contact'>Contact</NavLink></li>
                    </ul>
                    <div className="clearfix"> </div>
                </div>




            </div>
        );
    }
}

export default Navlink;