import React from "react";
import appleIcon from "../../assets/images/appstore-badge.png";
import androidIcon from "../../assets/images/googleplay-badge.png";
import tablePic from "../../assets/images/top.avif";
import { BsQrCodeScan } from "react-icons/bs";
import { PiPlayCircleThin } from "react-icons/pi";

const Hero = () => {
    return (
        <section className="hero-banner ">
            <div className="container mx-auto hero py-8 px-24 rounded-2xl mt-2 mb-8">
                <div className="hero-content flex justify-center flex-wrap">
                    <div className="hero-left lg:w-1/2 pt-12">
                        <div className="hero-badge badge flex items-center my-8 bg-white w-max py-2 px-2 rounded-full">
                            <div className="badge-icon">
                                <BsQrCodeScan />
                            </div>
                            <p
                                className="px-2"
                                style={{ fontSize: " 14px", fontWeight: "700" }}
                            >
                                Revolutionizing Event Attendance Tracking
                            </p>
                        </div>
                        <h1 className="xl:text-6xl text-5xl font-black">
                            Make <span>Attendance </span>Tracking Easy
                        </h1>
                        <div className="hero-description my-12">
                            Experience the seamless integration of our
                            innovative attendance tracking system, ensuring
                            efficiency and accuracy at every event. Join us
                            today to elevate your event management experience
                            and streamline the attendance process like never
                            before.
                        </div>
                        <div className="download-icons flex gap-4 items-center">
                            <div className="android-icon">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.sobow.icheckin"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={androidIcon}
                                        alt="android-iCheckin"
                                    />
                                </a>
                            </div>
                            <div className="apple-icon">
                                <a
                                    href="https://apps.apple.com/us/app/i-checkin/id6463780727"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={appleIcon}
                                        alt="android-iCheckin"
                                       
                                    />
                                </a>
                            </div>
                        </div>
                        <button className="hero-overview flex items-center gap-2 my-8 ">
                            <PiPlayCircleThin className="text-5xl" />
                            <p>Watch the Overview</p>
                        </button>
                    </div>
                    <div className="hero-right lg:w-1/2 flex items-center">
                        <img
                            src={tablePic}
                            alt="table_screen"
                            className="hero-pic"
                        />

                        <div className="circle-animate-wrap">
                            <div className="circle-animate">
                                <div className="circle circle-lg">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                                <div className="circle circle-md">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                                <div className="circle circle-sm">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
