import React, { useState } from "react";
import featuresData from "./data.js";
import frame from "../../assets/images/frame.png";
import bg1 from "../../assets/images/backgrounds/1.png";
import bg2 from "../../assets/images/backgrounds/2.png";
import bg3 from "../../assets/images/backgrounds/3.png";
import bg4 from "../../assets/images/backgrounds/4.png";
import bg5 from "../../assets/images/backgrounds/5.png";
import bg6 from "../../assets/images/backgrounds/6.png";

const FeaturesBlock = () => {
    const [hovered, setHovered] = useState(bg2);
    const handleFeatureHover = (index) => {
        setHovered(index);
    };

    const getBackgroundImage = () => {
        switch (hovered) {
            case 0:
                return bg1;
            case 1:
                return bg2;
            case 2:
                return bg3;
            case 3:
                return bg4;
            case 4:
                return bg5;
            case 5:
                return bg6;
            default:
                return bg2;
        }
    };
    return (
        <section className="features pb-24" id="features">
            <div className="container mx-auto">
                <div className="title text-center">
                    <div className="subtitle">- Features</div>
                    <h2>Our amazing features</h2>
                    <p className="w-1/2 mb-16 mx-auto">
                        I-Checkin adapts to any event type, ensuring
                        user-friendly simplicity and robust functionality,{" "}
                        <br /> whether it's a one-time event or a recurring
                        series.
                    </p>
                </div>
                <div className="features-row flex justify-center items-center gap-8">
                    <div className="col w-2/6 text-right flex flex-col gap-8">
                        {featuresData.slice(0, 3).map((feature, index) => (
                            <div
                                key={index}
                                className="feature flex flex-row-reverse items-center gap-4 hover:cursor-pointer"
                                onMouseEnter={() => handleFeatureHover(index)}
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
                        <div
                            className="feature-image"
                            style={{
                                backgroundImage: `url(${getBackgroundImage()})`,
                                maxHeight: "30rem",
                                backgroundSize: "contain",
                                borderRadius: "35px",
                                backgroundPosition: "center"
                            }}
                        >
                            <img
                                src={frame}
                                alt="iCheckin-features"
                                style={{ maxHeight: "30rem" }}
                            />
                        </div>
                    </div>
                    <div className="col w-2/6 text-left flex flex-col gap-8">
                        {featuresData.slice(3, 6).map((feature, index) => (
                            <div
                                key={index}
                                className="feature flex flex-row items-center gap-4 hover:cursor-pointer"
                                onMouseEnter={() =>
                                    handleFeatureHover(index + 3)
                                }
                            >
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
