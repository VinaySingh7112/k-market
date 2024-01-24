import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const shapeStyle = {
            visibility: 'visible',
            animationDuration: '1s',
            animationDelay: '0.3s',
            animationName: 'fadeInLeft' // You might need to define animations
        };

        return (
            <div className='footer'>

                <div className="footer-top-wrap pb-5 mt-0" style={{ backgroundColor: "#f7f7f7", color: 'black', paddingTop: "44px" }}>
                    <div className="container">
                        <div className="footer-widgets-wrap">
                            <div className="row">
                                <div className="col-lg-3 ">
                                    <div className="footer-widget">
                                        <div className="footer-about">
                                            <div className="footer-logo logo">
                                                
                                                <h2>Address</h2>
                                            </div>
                                            <div className="footer-text mt-4 w-75">
                                                <p>240, Ground Floor, BR Complex
                                                    13th Cross Rd, 2nd Stage, Indira Nagar II Stage,
                                                    Indiranagar, Bengaluru, Karnataka 560038</p>
                                            </div>
                                            <div className="footer-social mt-3">
                                                <a href="#"><i className="bi bi-facebook " style={{ fontSize: '30px' }}></i></a>
                                                <a href="#"><i className="bi bi-twitter ms-4" style={{ fontSize: '30px' }}></i></a>
                                                <a href="#"><i className="bi bi-pinterest ms-4" style={{ fontSize: '30px' }}></i></a>
                                                <a href="#"><i className="bi bi-linkedin ms-4" style={{ fontSize: '30px' }}></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 ">
                                    <div className="footer-widget">
                                        <h3 className="fw-title">Shop by</h3>
                                        <ul className="list-wrap" style={{ marginLeft: "-33px" }}>
                                            <p ><a href="#" className='text-reset text-decoration-none'>BOY GROUPS</a></p>
                                            <p><a href="#"className='text-reset text-decoration-none'>GIRL GROUPS</a></p>
                                            <p><a href="#"className='text-reset text-decoration-none'>SOLO Artists</a></p>
                                            <p><a href="#"className='text-reset text-decoration-none'>Daily Blogs</a></p>
                                         
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 ">
                                    <div className="footer-widget">
                                        <h3 className="fw-title ">Information</h3>
                                        <ul className="list-wrap" style={{ marginLeft: "-33px" }}>
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 ">
                                    <div className="footer-widget">
                                        <h3 className="fw-title ">Customer Service</h3>
                                        <ul className="list-wrap" style={{ marginLeft: "-33px" }}>
                                            <p><a href="/"className='text-reset text-decoration-none'>Privacy Policy</a></p>
                                            <p><a href="#"className='text-reset text-decoration-none'>Refund Policy</a></p>
                                            <p><a href="#"className='text-reset text-decoration-none'>Terms Of Service</a></p>
                                            <p><a href="#"className='text-reset text-decoration-none'>Shipping Policy</a></p>
                                       
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 ">
                                    <div className="footer-widget">
                                        <h3 className="fw-title ">CONTACT US</h3>
                                        <div className="footer-contact-wrap">
                                            <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                                            <ul className="list-wrap" style={{ marginLeft: "-33px" }}>
                                                <p className="phone"><i className="bi bi-phone"></i> +1 31-6555-0116</p>
                                                <p className="mail"><i className="bi bi-envelope"></i> korian@example.com</p>
                                                <p className="website"><i className="bi bi-globe"></i> www.koriandomain.com</p>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>

                <div class="copyright-wrap p-4" style={{ background: "#f7f7f7", color: 'black', borderTop: "1px solid gray", alignItems: 'center' }}>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-7">
                                <div class="copyright-text">
                                    <p className='text-dark'>Copyright © 2023 vinay All Rights Reserved.</p>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="payment-card text-center text-md-end">
                                    <img src="pics.png" width={'250px'} alt="card" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

