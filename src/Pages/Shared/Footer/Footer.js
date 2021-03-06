import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        // This footer for all page
        <div className="footer">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
                    <div className="col-md-4  text-start">
                        <h5>About Us</h5>
                        <p>We are providing best service.</p>

                        <div className="p-0">
                        The new hero pieces bring instant fashion credibility. Bright florals clash with camouflage prints.
                        </div>
                    </div>
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-2 footer-about">
                        <h5>Contact</h5>
                        <ul>
                            <li>
                                <a href="/#">+880147811101</a>
                            </li>
                            <li>
                                <p>+8805511110</p>
                            </li>
                            <li>
                                <p>garcia@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    {/* Social media */}
                    <div className="col-md-4  social-media">
                        <p className="pb-3">Follow us</p>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                        <a href="https://m.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube-square"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <hr />
                <p className="text-center"><span> Copyright &copy; All rights reserve sudeb karmokar</span></p>

            </div>
        </div>
    );
};

export default Footer;