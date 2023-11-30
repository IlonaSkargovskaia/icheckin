import React from "react";
import featuresData from "./data.js";
import frame from "../../assets/images/frame.png";

const FeaturesBlock = () => {
    return (
        <section className="features pb-24">
            <div className="container mx-auto">
                <div className="title text-center">
                    <div className="subtitle">- Features</div>
                    <h2 >Our amazing features</h2>
                    <p className="w-1/2 mb-16 mx-auto">I-Checkin adapts to any event type, ensuring user-friendly simplicity and robust functionality, <br /> whether it's a one-time event or a recurring series.</p>
                </div>
                <div className="features-row flex justify-center items-center gap-8">
                    <div className="col w-2/6 text-right flex flex-col gap-8">
                        {featuresData.slice(0, 3).map((feature, index) => (
                            <div
                                key={index}
                                className="feature flex flex-row-reverse items-center gap-4"
                            >
                                <div className="icon">{feature.icon}</div>
                                <div className="content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col w-1/6 flex justify-center">
                        <img
                            src={frame}
                            alt="iCheckin-features"
                            style={{ maxHeight: "30rem" }}
                        />
                    </div>
                    <div className="col w-2/6 text-left flex flex-col gap-8">
                        {featuresData.slice(3, 6).map((feature, index) => (
                            <div key={index} className="feature flex flex-row items-center gap-4">
                                <div className="icon">{feature.icon}</div>
                                <div className="content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesBlock;
