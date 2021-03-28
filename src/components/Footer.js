import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";
import { FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>San Diego, CA </p>
                        </div>
                        <div className="d-flex">
                            <a href="tel: (619) 841-6036">(619) 841-6036</a>
                        </div>
                        <div className="d-flex">
                            <p>stephbegle@gmail.com </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About Me</a>
                                <br />
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br />
                                <a className="footer-nav">Projects</a>
                                <br />
                                <a className="footer-nav">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FaGithub
                            className="mx-3" size={36} 
                            cursor="pointer"/>
                            <FaLinkedin 
                            className="mx-3" size={36} 
                            cursor="pointer"/>
                            <FaFacebook 
                            className="mx-3" size={36} 
                            cursor="pointer"/>
                            <FaInstagram 
                            className="mx-3" size={36} 
                            cursor="pointer"/>
                        </div>

                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Footer
