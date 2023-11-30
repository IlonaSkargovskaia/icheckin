import React from "react";
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";
import "./Slide.css";
import { Slide } from "./Slide";

const data = [
    {
        image: "https://picsum.photos/200/300/?random=1",
        text: "desc",
    },
    {
        image: "https://picsum.photos/200/300/?random=12",
        text: "desc",
    },
    {
        image: "https://picsum.photos/200/300/?random=13",
        text: "desc",
    },
    {
        image: "https://picsum.photos/200/300/?random=15",
        text: "desc",
    },
    {
        image: "https://picsum.photos/200/300/?random=10",
        text: "desc",
    },
    {
      image: "https://picsum.photos/200/300/?random=11",
      text: "desc",
  },
  {
      image: "https://picsum.photos/200/300/?random=8",
      text: "desc",
  },
];

const ScreenShots = () => {
    const ref = React.useRef(StackedCarousel);
    return (
        <section className="screens">
            <div className="screens-bg container mx-auto rounded-2xl p-24">
                <div className="title text-center">
                    <div className="subtitle">- Quick view</div>
                    <h2>Take a visual Tour of our user-friendly interface</h2>
                    <p className="w-1/2 mb-16 mx-auto">
                        Boost attendee experiences with our user-friendly QR
                        code scanner, <br />
                        making event check-ins quick and enjoyable.
                    </p>
                </div>

                <div className="card">
                    <div style={{ width: "100%", position: "relative" }}>
                        <ResponsiveContainer
                            carouselRef={ref}
                            render={(width, carouselRef) => {
                                return (
                                    <StackedCarousel
                                        ref={carouselRef}
                                        slideComponent={Slide}
                                        slideWidth={200}
                                        carouselWidth={width}
                                        data={data}
                                        maxVisibleSlide={7}
                                        disableSwipe
                                        customScales={[1, 0.85, 0.7, 0.55, 0.25]}
                                        transitionTime={450}
                                    />
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScreenShots;
