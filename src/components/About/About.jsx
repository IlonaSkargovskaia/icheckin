import React from "react";
import img from "../../assets/images/about.png";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="about my-32">
            <div className="container mx-auto">
                <div className="about-row flex flex-col md:flex-row items-center gap-4">
                    <div className="img-col-left col lg:w-1/2 flex justify-center">
                        <div className="about-img">
                            <img
                                src={img}
                                alt="about-icheckin"
                                style={{ maxHeight: "34rem" }}
                            />
                        </div>
                    </div>
                    <div className="col lg:w-1/2">
                        <div className="about-title">
                            <h2 className="title">
                                About <span>i-Checkin</span>
                            </h2>
                        </div>
                        <ul className="about-list">
                            <li className="flex">
                                <FaCheck className="icons" />
                                <p style={{ marginLeft: "10px" }}>
                                    Streamline your event experience with our QR
                                    code check-in system, ensuring a swift and
                                    hassle-free entry process. Enjoy the
                                    convenience of quick access, saving time and
                                    allowing you to fully immerse yourself in
                                    the event's excitement.
                                </p>
                            </li>
                            <li className="flex">
                                <FaCheck className="icons" />
                                <p style={{ marginLeft: "10px" }}>
                                    Enhance event security and efficiency by
                                    leveraging our QR code check-in feature.
                                    Easily track attendance, minimize queues,
                                    and provide a seamless experience for
                                    attendees, allowing you to focus on creating
                                    memorable moments at your events
                                </p>
                            </li>
                        </ul>
                        <Link to="/about">
                            <button className="main-btn">Discover more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
