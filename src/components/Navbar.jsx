import React from "react";
import profile from "../img/Profile-Hello.png";

const Navbar = () => {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md 
        border-b border-white/20 p-4 text-white">
            <div className="flex justify-between md:justify-around 
            items-center max-w-7xl mx-auto">
                <a href="Navbar.jsx">
                    <img
                        src={profile}
                        alt="Profile"
                        className="rounded-full w-12 h-12 sm:w-14 sm:h-14"
                    />
                </a>

                <ul className="flex space-x-6 sm:space-x-8 text-sm sm:text-base">
                    {["Work", "Projects", "About"].map((item, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleScroll(item.toLowerCase())}
                                className="relative hover:text-green-400 transition-colors 
                                after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                                after:w-0 after:h-[2px] after:bg-green-400 after:transition-all 
                                after:duration-300 hover:after:w-full"
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
