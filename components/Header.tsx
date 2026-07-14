"use client";

import cn from "@/utils/cn";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";

const Header = () => {
    const [showImage, setShowImage] = useState(false);
    const [changeColor, setChangeColor] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setChangeColor(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            {showImage && (
                <div 
                    className="fixed z-100 w-full h-full bg-black/40 backdrop-blur-lg flex flex-col items-center justify-center space-y-8"
                    onClick={() => setShowImage(false)}
                >
                <Image 
                    src="/logo.jpeg"
                    alt="Logo"
                    width={500}
                    height={500}
                    className="rounded-full"
                />
                <span className="text-white text-xl">Tap anywhere to close</span>
                </div>
            )}

            {showMenu && (
                        <div className="fixed z-100 w-full h-full bg-black/40 backdrop-blur-lg flex flex-col items-center justify-center space-y-8" onClick={() => setShowMenu(false)}>
                            <button className="absolute top-4 right-4 text-white focus:outline-none" onClick={() => setShowMenu(false)}>
                                <FaX size={24} />
                            </button>
                            <a
                                href="#hero"
                                className="text-2xl font-semibold text-white p-2 px-4 rounded-lg hover:bg-secondary hover:text-white hover:scale-110 duration-300"
                                onClick={() => setShowMenu(false)}
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="text-2xl font-semibold text-white p-2 px-4 rounded-lg hover:bg-secondary hover:text-white hover:scale-110 duration-300"
                                onClick={() => setShowMenu(false)}
                            > 
                                About
                            </a>
                            <a
                                href="#rooms"
                                className="text-2xl font-semibold text-white p-2 px-4 rounded-lg hover:bg-secondary hover:text-white hover:scale-110 duration-300"
                                onClick={() => setShowMenu(false)}
                            >
                                Rooms
                            </a>
                            <a
                                href="#attractions"
                                className="text-2xl font-semibold text-white p-2 px-4 rounded-lg hover:bg-secondary hover:text-white hover:scale-110 duration-300"
                                onClick={() => setShowMenu(false)}
                            >
                                Attractions
                            </a>
                            <a
                                href="#contacts"
                                className="text-2xl font-semibold text-white p-2 px-4 rounded-lg hover:bg-secondary hover:text-white hover:scale-110 duration-300"
                                onClick={() => setShowMenu(false)}
                            >
                                Contacts
                            </a>
                        </div>
                    )}
            <nav className={cn(
                    `w-full px-8 py-4 flex justify-between items-center fixed top-0 left-0 z-20 duration-500 transition-colors`,
                    changeColor && "bg-white/70 backdrop-blur-lg"
                )}>
                <div className="flex items-center justify-around space-x-4">
                    <Image
                        src="/logo.jpeg"
                        alt="Logo" width={40}
                        height={40}
                        className="inline-block rounded-full"
                        onClick={() => setShowImage(true)}
                    />
                    <span className={cn("font-bold text-white text-2xl", changeColor && "text-black")}>Summerforest</span>
                </div>

                <div className="space-x-4 lg:space-x-8 hidden lg:flex">
                    <a 
                        href="#hero"
                        className={cn(
                            `text-xl font-semibold text-white p-2 px-4 rounded-lg hover:bg-secondary hover:text-white hover:scale-110 duration-300`,
                            changeColor && "text-black"
                        )}
                    >
                        Home
                    </a>
                    <a 
                        href="#about"
                        className={cn(
                            `text-xl font-semibold text-white p-2 px-4 rounded-lg hover:bg-secondary hover:text-white hover:scale-110 duration-300`,
                            changeColor && "text-black"
                        )}
                    >
                        About
                    </a>
                    <a 
                        href="#rooms"
                        className={cn(
                            `text-xl font-semibold text-white p-2 px-4 rounded-lg hover:bg-secondary hover:text-white hover:scale-110 duration-300`,
                            changeColor && "text-black"
                        )}
                    >
                        Rooms
                    </a>
                    <a 
                        href="#attractions"
                        className={cn(
                            `text-xl font-semibold text-white p-2 px-4 rounded-lg hover:bg-secondary hover:text-white hover:scale-110 duration-300`,
                            changeColor && "text-black"
                        )}
                    >
                        Attractions
                    </a>
                    <a 
                        href="#contacts"
                        className={cn(
                            `text-xl font-semibold text-white p-2 px-4 rounded-lg hover:bg-secondary hover:text-white hover:scale-110 duration-300`,
                            changeColor && "text-black"
                        )}
                    >
                        Contacts
                    </a>
                </div>
                
                <div className="lg:hidden">
                    <button className="text-white focus:outline-none" onClick={() => setShowMenu(true)}>
                        <FaBars size={24} />
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Header;
