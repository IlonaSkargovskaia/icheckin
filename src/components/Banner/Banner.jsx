import React from "react";
import appleIcon from "../../assets/images/appstore-badge.png";
import androidIcon from "../../assets/images/googleplay-badge.png";

const Banner = () => {
    return (
        <section className="banner container mx-auto rounded-2xl mb-24" id="#banner">
            <div className="flex flex-col items-center justify-center gap-8">
                <h2 className="white-title">
                    Download i-Checkin App Now!
                </h2>
                <div className="desc w-3/4 lg:w-1/2 text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempore veniam minus voluptates at amet ut aut fugiat enim cumque reprehenderit velit nam! 
                </div>
                <div className="download-icons flex gap-4 items-center">
                            <div className="android-icon w-full">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.sobow.icheckin"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={androidIcon}
                                        alt="android-iCheckin"
                                        style={{ maxHeight: "63px" }}
                                    />
                                </a>
                            </div>
                            <div className="apple-icon w-full">
                                <a
                                    href="https://apps.apple.com/us/app/i-checkin/id6463780727"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={appleIcon}
                                        alt="android-iCheckin"
                                        style={{ maxHeight: "58px" }}
                                    />
                                </a>
                            </div>
                        </div>
            </div>
        </section>
    );
};

export default Banner;
