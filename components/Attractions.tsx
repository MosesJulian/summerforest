"use client";
import cn from "@/utils/cn";
import Image from "next/image";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { handleNext, handlePrev } from "@/utils/handleCarousel";

const imageDuration = 7500;

const attractionImages = [
	{
		src: "/start1.jpeg",
		alt: "Room 1",
		description: "Description for Room 1"
	},
	{
		src: "/start2.jpeg",
		alt: "Room 2",
        description: "Description for Room 2"
	},
	{
		src: "/start3.jpeg",
		alt: "Room 3",
        description: "Description for Room 3"
	},
	{
		src: "/start4.jpeg",
		alt: "Room 4",
        description: "Description for Room 4"
	},
	{
		src: "/start2.jpeg",
		alt: "Room 5",
        description: "Description for Room 5"
	}
]

const Attractions = () => {
    const [attractionImageIndex, setAttractionImageIndex] = useState(0);

    useEffect(() => {
            const interval = setInterval(() => handleNext(attractionImages, setAttractionImageIndex), imageDuration);
            return () => clearInterval(interval);
    }, []);
    return (
        <section className="bg-cyan-600/75 w-full h-auto items-center justify-center flex flex-col gap-4 py-8">
            <h2 className="text-4xl font-bold text-white text-center">Nearby Attractions</h2>
            <div className="flex w-full items-stretch justify-center p-4">
                <button
                    className="flex items-center bg-white/90 hover:bg-gray-800/60 transition-colors duration-300 p-0 sm:p-2 md:p-4 text-black hover:text-white rounded-l-4xl"
                    onClick={() => handlePrev(attractionImages, setAttractionImageIndex)}
                >
                    <FaLessThan size={30} />
                </button>
                <div className="relative w-full max-w-full sm:max-w-[75%] md:max-w-[50%] min-h-150 h-full">
                    {attractionImages.map((item, index) => (
                        <div key={index} className={cn("absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0", index === attractionImageIndex && "opacity-100")}>
                            <Image src={item.src} alt={item.alt} fill className={cn("w-full h-auto")} />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                                <h3 className="text-xl font-bold">{item.alt}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="flex items-center bg-white/90 hover:bg-gray-800/60 transition-colors duration-300 p-0 sm:p-2 md:p-4 text-black hover:text-white rounded-r-4xl"
                    onClick={() => handleNext(attractionImages, setAttractionImageIndex)}
                >
                    <FaGreaterThan size={30} />
                </button>
            </div>
        </section>
    );
}

export default Attractions;