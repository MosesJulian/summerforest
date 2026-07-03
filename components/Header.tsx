"use client";

import useWindowEvents from "@/hooks/useWindowEvents";
import cn from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";

const shouldShowColor = () => {
    if (window == null) return false;

    const show: number = 50;
    return window.scrollY > show;
};

const Header = () => {
    const [showImage, setShowImage] = useState(false);
    const [changeColor, setChangeColor] = useState(false);

    const handleColor = () => {
        setChangeColor(shouldShowColor());
    }
    
    useWindowEvents ("scroll", handleColor);
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
                <div className="space-x-4">
                    <button className={cn(
                        `text-xl font-semibold text-white p-2 px-4 rounded-lg hover:bg-secondary hover:text-white hover:scale-110 duration-300`,
                        changeColor && "text-black"
                    )}>
                        Home
                    </button>
                    <button className={cn(
                        `text-xl font-semibold text-white p-2 px-4 rounded-lg hover:bg-secondary hover:text-white hover:scale-110 duration-300`,
                        changeColor && "text-black"
                    )}>
                        About
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Header;
