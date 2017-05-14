/**
 * Created by SLEEK on 5/12/2017.
 */
import React from 'react';
import './css/animate.css';
import './css/style.css';
import './css/swipebox.css';
import './css/font-awesome.css';
import Navlink from "./Navlink";


class Banner extends React.Component {
    render() {
        return (

            <div>
                <div  id="home" className="banner">
                    <div className="container">
                        <div className="wthree-header">
                            <div className="agileits-logo navbar-left">
                                <h1 className="wow swing animated" data-wow-delay=".5s"><a href="index.html">Kweku's Clinic</a></h1>
                            </div>
                            <div className="navbar-right social-icons wow fadeInRight animated" data-wow-delay=".5s">
                                <ul>
                                    <li><a href="#" className="fa fa-facebook icon-border facebook"> </a></li>
                                    <li><a href="#" className="fa fa-twitter icon-border twitter"> </a></li>
                                    <li><a href="#" className="fa fa-google-plus icon-border googleplus"> </a></li>
                                    <li><a href="#" className="fa fa-rss icon-border rss"> </a></li>
                                </ul>
                            </div>
                            <div className="clearfix"> </div>
                        </div>

                        <div className="top-w3lnav">
                            <nav className="navbar navbar-default">
                                <div className="navbar-header w3l-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                        Menu
                                    </button>
                                </div>

                                <Navlink />


                            </nav>
                        </div>

                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p>© 2017 Kweku's Clinic . All rights reserved | Design by <a href="#">Pizza React</a></p>
                    </div>
                </div>

            </div>







        );
    }
}

export default Banner;