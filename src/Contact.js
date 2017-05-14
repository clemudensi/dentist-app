/**
 * Created by SLEEK on 5/13/2017.
 */
import React from 'react';


class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h3 className="w3layouts-title wow fadeInDown animated" data-wow-delay=".5s">Contact Us</h3>
                    <div className="contact-form">
                        <div className="col-md-7 contact-right wow fadeInRight animated" data-wow-delay=".5s">
                            <h5>Send us an Email:</h5>
                            <p>For more enquiries and relevant information please reach out to us</p>
                            <form action="#" method="post">
                                <input type="text" name="Name" placeholder="Name" required=""/>
                                <input type="text" className="email" name="Email" placeholder="Email" required=""/>
                                <input type="text" name="Phone no" placeholder="Phone" required=""/>
                                <textarea name="Message" placeholder="Message" required=""/>
                                <input className="wow zoomIn animated" data-wow-delay=".5s" type="submit" value="SUBMIT" />
                            </form>
                        </div>
                        <div className="col-md-5 contact-left">
                            <div className="address wow fadeInLeft animated" data-wow-delay=".5s">
                                <h5>Address:</h5>
                                <p><i className="glyphicon glyphicon-home"></i> 20 Alunguintugui street Ambassadorial Enclave, East Legon. </p>
                            </div>
                            <div className="address address-mdl wow fadeInLeft animated" data-wow-delay=".5s">
                                <h5>Phones:</h5>
                                <p><i className="glyphicon glyphicon-earphone"></i> +23320778178</p>
                                <p><i className="glyphicon glyphicon-phone"></i> +18046793790</p>
                            </div>
                            <div className="address wow fadeInLeft animated" data-wow-delay=".5s">
                                <h5>Email:</h5>
                                <p><i className="glyphicon glyphicon-envelope"></i> <a href="mailto:info@example.com">mail@example.com</a></p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;