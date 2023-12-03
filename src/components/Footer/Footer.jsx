import React from "react";
import footerlogo from "../../assets/images/footer-logo.png";
import { navLinks } from "../Navbar/navbarLinks";
import { CiPaperplane } from "react-icons/ci";
import { socialMediaIcons } from "../../socialicons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container mx-auto">
                <div className="footer-row flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-16 lg:gap-8 py-8 justify-center lg:justify-between flex-wrap lg:flex-nowrap text-center lg:text-left">
                    <div className="col flex flex-col lg:w-2/5 gap-4 items-center lg:items-start">
                        <div className="footer-logo w-1/2">
                            <img src={footerlogo} alt="iCheckin-logo" />
                        </div>
                        <div className="footer-desc">
                            I-Checkin is your all-in-one solution to streamline
                            attendance tracking and unlock event insights.
                            Perfect for Universities, Institutions, Conferences,
                            Event hosts, Wedding planners, and more...
                        </div>
                    </div>
                    <div className="comp col lg:w-1/5 ">
                        <h4>Company</h4>
                        <ul>
                            {navLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="cont col lg:w-2/5 ">
                        <h4>Contacts</h4>
                        <div className="flex flex-col gap-4">
                            <p>
                                Feel free to reach out to us for  any inquiries
                                or just to say hello. We're always happy to
                                connect with our community!
                            </p>
                            <div>
                                <a
                                    href="mailto:info@i-checkin.app"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    info@i-checkin.app
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col w-3/4 lg:w-2/5 ">
                        <h4>Get the latest information</h4>
                        <div className="flex">
                            <input
                                type="text"
                                className="flex-1 p-2 border rounded-l-lg"
                                placeholder="Email address"
                            />

                            <button className="footer-btn rounded-r-lg">
                                <CiPaperplane />
                            </button>
                        </div>
                        <div className="social-links flex gap-4 mt-8 justify-center lg:justify-start">
                                {socialMediaIcons.map((socialMedia, index) => (
                                    <a
                                        key={index}
                                        href={socialMedia.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {socialMedia.icon}
                                    </a>
                                ))}
                            </div>
                    </div>
                </div>
                <hr />
                <div className="footer-row flex flex-col md:flex-row py-8 justify-between items-center">
                    <div className="col">
                        <p className="copyrights text-center md:text-left mb-4">
                            Copyright © {new Date().getFullYear()} i-Checkin.
                            All rights reserved.
                        </p>
                    </div>
                    <div className="col flex flex-col sm:flex-row text-center sm:text-left gap-4 mb-4">
                        <a href="/">User terms & Conditions</a>
                        <span className="hidden sm:block"> | </span>
                        <a href="/">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
