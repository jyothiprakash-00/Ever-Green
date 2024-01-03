import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>EVER</span>GREEN</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
          
            <Link to={'https://linkedin.com/in/jyothi-prakash-1a9275228'} target='_blank' style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-linkedin"></i></Link>
            <Link to={'https://instagram.com/jyothi__prakash?igshid=MzNlNGNkZWQ4Mg=='} target='_blank' style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-instagram"></i></Link>
            <Link to={'https://www.facebook.com/profile.php?id=100057475186028&mibextid=ZbWKwL'} target='_blank' style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-facebook"></i></Link>
            <Link to={'https://getbootstrap.com/'} target='_blank' style={{ textDecoration:'none', color:'white' }}><i className="fa-solid fa-envelope"></i></Link>
            <Link to={'https://getbootstrap.com/'} target='_blank' style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-twitter"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                <Link to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/contact">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/policy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +91 9123456781</p>
                            <p><i class="fa-solid fa-envelope"></i> jyothiprakash@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Kochi, India.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Copyright © 2023 Green World. Design By Jyothi Prakash</p>
            </div>
        </>
    )
}

export default Footer