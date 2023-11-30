import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { navLinks } from "./navbarLinks";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled beyond a certain threshold
            setIsSticky(window.scrollY > 100);
        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={`navbar-area sm:px-8 px-4 py-2 z-10 w-full ${
                    isSticky ? "sticky" : ""
                }`}
            >
                <div className="container mx-auto">
                    <nav className="flex justify-between items-center max-container">
                        <a href="/" className="logo">
                            <img src={logo} alt="logo-iCheckin" />
                        </a>
                        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className=" leading-normal 
                                    text-slate-gray"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-2 leading-normal font-medium  max-lg:hidden wide:mr-24">
                            <button className="secondary-btn flex items-center">
                                <BiSolidLock className="text-xl pr-1" style={{marginLeft: "-0.25rem"}}/> Member
                                Login
                            </button>

                            <button className="main-btn flex items-center">
                                <HiDownload className="text-xl pr-1" style={{marginLeft: "-0.25rem"}}/> Get the
                                app
                            </button>
                        </div>
                        <div
                            className="hidden max-lg:block cursor-pointer"
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            <RxHamburgerMenu className="text-4xl" />
                        </div>
                    </nav>
                </div>
            </header>
            {isMenuOpen && (
                <div>
                    <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-50">
                        <div
                            className="hidden max-lg:block fixed right-0 px-8 py-4 cursor-pointer"
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            <AiOutlineClose className="text-4xl" />
                        </div>
                        <ul className=" lg:hidden flex flex-col items-center mt-24 h-full ">
                            {navLinks.map((item) => (
                                <li key={item.label} className="w-full">
                                    <a
                                        href={item.href}
                                        className="nav-link py-2.5 block w-full hover:bg-slate-200 text-center"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <div className="flex my-4 gap-4 flex-wrap justify-center">
                                <button className="secondary-btn flex items-center">
                                    <BiSolidLock className="text-xl pr-1" style={{marginLeft: "-0.25rem"}}/>
                                    Member Login
                                </button>

                                <button className="main-btn flex items-center">
                                    <HiDownload className="text-xl pr-1" style={{marginLeft: "-0.25rem"}}/> Get
                                    the app
                                </button>
                            </div>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Navbar;
