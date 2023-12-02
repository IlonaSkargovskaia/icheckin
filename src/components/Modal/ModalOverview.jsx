import React from "react";
import videoSrc from "../../assets/images/video.mp4";

const ModalOverview = ({ isOpen, onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            onClose();
        }
    };
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div
                className="modal video-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content">
                    <div className="quest-img mt-8 flex flex-col items-center">
                        {/* <img src={faq} alt="" className="quest-img-pic" /> */}
                        <video
                            width="640"
                            height="360"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="text-center">
                            <h2>How Does It Work?</h2>
                            <p>
                                Experience the seamless integration of our
                                innovative attendance tracking system, ensuring
                                efficiency and accuracy at every event. Join us
                                today to elevate your event management
                                experience and streamline the attendance process
                                like never before.
                            </p>
                            <button className="main-btn mt-4">Discover more</button>
                        </div>
                    </div>
                    <button className="modal-close" onClick={onClose}>
                        &times;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalOverview;
