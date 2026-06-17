"use client";

import useWindowEvents from "@/hooks/useWindowEvents";
import Image from "next/image";
import { useState } from "react";

let isScrolling: NodeJS.Timeout;

const Header = () => {
    const [showImage, setShowImage] = useState(false);
    
    const handleScroll = () => {
        const nav = window?.document.querySelector("nav");
        
        nav?.classList.add("-translate-y-full");

        window.clearTimeout(isScrolling);
        
        isScrolling = setTimeout(() => {
            nav?.classList.remove("-translate-y-full");
        }, 150);
    };


    useWindowEvents ("scroll", handleScroll);
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
                <span className="text-text-secondary text-xl">Tap anywhere to close</span>
                </div>
            )}
            <nav className="w-full px-8 py-4 flex justify-between items-center fixed top-0 left-0 z-20 bg-background/30 backdrop-blur-lg transition-transform duration-500">
                <div className="flex items-center justify-around space-x-4">
                    <Image
                        src="/logo.jpeg"
                        alt="Logo" width={40}
                        height={40}
                        className="inline-block rounded-full"
                        onClick={() => setShowImage(true)}
                    />
                    <span className="font-bold text-text-secondary text-2xl [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">Summerforest</span>
                </div>
                <div className="space-x-4">
                    <button className="bg-primary text-text-secondary p-2 px-4 rounded-lg hover:bg-secondary hover:scale-110 duration-300">Home</button>
                    <button className="bg-primary text-text-secondary p-2 px-4 rounded-lg hover:bg-secondary hover:scale-110 duration-300">About</button>
                </div>
            </nav>
        </>
    );
}

export default Header;
