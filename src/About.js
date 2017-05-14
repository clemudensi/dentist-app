/**
 * Created by SLEEK on 5/13/2017.
 */
import React from 'react';


class About extends React.Component {
    render() {
        return (
            <div>

                <div id="about" className="about">

                    <div className="container">
                        <h3 className="w3layouts-title wow fadeInDown animated" data-wow-delay=".5s">About Us</h3>
                        <div className="about-agileitsrow">
                            <div className="col-md-7 about-left wow slideInLeft animated" data-wow-delay=".5s">
                                <div className="col-md-4 col-sm-4 col-xs-4 about-img wow zoomInLeft animated" data-wow-delay=".9s">
                                    <img src="images/img1.jpg" alt=""/>
                                </div>
                                <div className="col-md-8 col-sm-8 about-w3ls-text wow zoomInRight animated" data-wow-delay=".9s">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at. Donec fringilla lacus eu pretium rutrum. Cras aliquet congue ullamcorper. Etiam mattis eros eu ullamcorper volutpat. Proin ut dui a urna efficitur varius. </p>
                                    <p>Quisque molestie cursus mi et congue consectetur adipiscing elit cras rutrum iaculis enim, Lorem ipsum dolor sit amet, non convallis felis mattis at.</p>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="col-md-4 about-right w3-agileits wow slideInRight animated" data-wow-delay=".5s">
                                <h4>Our Advantages </h4>
                                <ul>
                                    <li><span className="glyphicon glyphicon-menu-right"></span>We do it like no other</li>
                                    <li><span className="glyphicon glyphicon-menu-right"></span>Nobody come close because we hot</li>
                                    <li><span className="glyphicon glyphicon-menu-right"></span>This Pizza must be our ain't no stopping</li>
                                    <li><span className="glyphicon glyphicon-menu-right"></span>We grining really hard cos thats wassup</li>
                                    <li><span className="glyphicon glyphicon-menu-right"></span>We have legendary react bada ass</li>
                                    <li><span className="glyphicon glyphicon-menu-right"></span>We killing it and keeping it real</li>
                                </ul>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default About;