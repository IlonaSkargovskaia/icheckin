import React from "react";
import footerlogo from "../../assets/images/footer-logo.png";
import { navLinks } from "../Navbar/navbarLinks";
import { CiPaperplane } from "react-icons/ci";
import { socialMediaIcons } from "../../socialicons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container mx-auto">
                <div className="footer-row flex gap-8 py-8 justify-between">
                    <div className="col flex flex-col w-2/5 gap-4">
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
                    <div className="col w-1/5 ">
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
                    <div className="col w-2/5 ">
                        <h4>Contacts</h4>
                        <div className="flex flex-col gap-4">
                            <p>
                                Feel free to reach out to us for  any inquiries <br />
                                or just to say hello. We're always happy to
                                connect <br />with our community!
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
                    <div className="col w-2/5 ">
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
                        <div className="social-links flex gap-4 mt-8">
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
                <div className="footer-row flex py-8 justify-between">
                    <div className="col">
                        <p className="copyrights">
                            Copyright © {new Date().getFullYear()} i-Checkin.
                            All rights reserved.
                        </p>
                    </div>
                    <div className="col flex gap-4">
                        <a href="/">User terms & Conditions</a>
                        <span> | </span>
                        <a href="/">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
