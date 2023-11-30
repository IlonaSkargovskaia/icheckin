import React from "react";
import "./Slide.css";

export const Slide = React.memo(function (StackedCarouselSlideProps) {
    const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } =
        StackedCarouselSlideProps;

    const coverImage = data[dataIndex].image;
    // const text = data[dataIndex].text;

    return (
        <div className="card-card" draggable={false}>
            <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
                <div
                    className="card-overlay fill"
                    onClick={() => {
                        if (!isCenterSlide) swipeTo(slideIndex);
                    }}
                />
            </div>
            <div className="detail fill">
                <div className="description">
                    <img
                        
                        alt="iCheckin-screen"
                        className="cover-image"
                        src={coverImage}
                    />
                    {/* <p>{text}</p> */}
                </div>
            </div>
        </div>
    );
});
