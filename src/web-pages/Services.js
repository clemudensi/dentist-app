/**
 * Created by SLEEK on 5/12/2017.
 */
import React from 'react';

class Services extends React.Component {
    render() {
        return (
            <div>
                <div class="services">
                    <div class="container">
                        <div class="col-md-4 services_left wow bounceInDown" data-wow-duration="1.5s" data-wow-delay="0s">
                            <h3>Our Best Services</h3>
                            <p class="ser-para" >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                            <a href="about.html" class="hvr-outline-out button2">See More About Us</a>
                            <script>

                                $(function () {
                                // Slideshow 4
                                $("#slider4").responsiveSlides({
                                    auto: true,
                                    pager: true,
                                    nav: false,
                                    speed: 500,
                                    namespace: "callbacks",
                                    before: function () {
                                        $('.events').append("<li>before event fired.</li>");
                                    },
                                    after: function () {
                                        $('.events').append("<li>after event fired.</li>");
                                    }
                                })
                            });
                            </script>
                            <div  class="callbacks_container">
                                <ul class="rslides" id="slider4">
                                    <li>
                                        <div class="ser-bottom">
                                            <h5>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                                sed quia consequuntur magni dolores eos qui </h5>
                                            <p>- Alia Smith</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="ser-bottom">
                                            <h5>Voluptas sit aspernatur aut odit aut fugit,sed quia consequuntur magni dolores
                                                eos qui ratione voluptatem sequi nesciunt</h5>
                                            <p>- Thompson</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="ser-bottom">
                                            <h5>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                                sed quia consequuntur magni dolores eos qui </h5>
                                            <p>- Federic</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="col-md-8 services_right ">
                            <div class="list-left text-center wow bounceInDown" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                <h4>Voluptatem</h4>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui</p>
                            </div>
                            <div class="list-left text-center wow bounceInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <span class="glyphicon glyphicon-scissors" aria-hidden="true"></span>
                                <h4>Voluptatem</h4>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui</p>
                            </div>
                            <div class="list-left text-center no_marg wow bounceInDown" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                <span class="glyphicon glyphicon-apple" aria-hidden="true"></span>
                                <h4>Voluptatem</h4>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui</p>
                            </div>
                            <div class="list-left text-center no_marg wow bounceInDown" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                <span class="glyphicon glyphicon-education" aria-hidden="true"></span>
                                <h4>Voluptatem</h4>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                    sed quia consequuntur magni dolores eos qui</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;