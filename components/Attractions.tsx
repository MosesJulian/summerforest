"use client";
import cn from "@/utils/cn";
import Image from "next/image";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { handleNext, handlePrev } from "@/utils/handleCarousel";

const imageDuration = 7500;

const attractionImages = [
	{
		src: "/attraction1.jpg",
		alt: "Goa Gong",
		description: "Goa Gong is a famous cave located in Pacitan, East Java, Indonesia. It is known for its stunning stalactites and stalagmites formations, as well as its unique natural beauty. The cave is a popular tourist destination and is often visited by those interested in exploring natural wonders and geological formations."
	},
	{
		src: "/attraction2.jpg",
		alt: "Pantai Waduk",
        description: "Pantai Waduk is a beautiful beach located in the heart of the forest, offering a serene environment for visitors to relax and enjoy the natural surroundings."
	},
	{
		src: "/attraction3.jpg",
		alt: "Pantai Watukarung",
        description: "Pantai Watukarung is a picturesque beach known for its clear waters and scenic views, making it a favorite spot for tourists and locals alike."
	},
	{
		src: "/attraction4.jpg",
		alt: "Kali Cokel",
        description: "Kali Cokel is a charming river that flows through the region, offering opportunities for hiking, picnicking, and enjoying the natural landscape."
	},
	{
		src: "/attraction5.jpg",
		alt: "Puncak Kasap",
        description: "Puncak Kasap is a scenic mountain peak offering breathtaking views of the surrounding landscape."
	}
]

const Attractions = () => {
    const [attractionImageIndex, setAttractionImageIndex] = useState(0);

    useEffect(() => {
            const interval = setInterval(() => handleNext(attractionImages, setAttractionImageIndex), imageDuration);
            return () => clearInterval(interval);
    }, []);
    return (
        <section className="bg-cyan-600/75 w-full h-auto items-center justify-center flex flex-col gap-4 py-8 scroll-mt-18" id="attractions">
            <h2 className="text-4xl font-bold text-white text-center">Nearby Attractions</h2>
            <div className="flex w-full items-stretch justify-center p-4">
                <button
                    className="flex items-center bg-white/90 hover:bg-gray-800/60 transition-colors duration-300 p-0 sm:p-2 md:p-4 text-black hover:text-white rounded-l-4xl"
                    onClick={() => handlePrev(attractionImages, setAttractionImageIndex)}
                >
                    <FaLessThan size={30} />
                </button>
                <div className="relative w-full max-w-full md:max-w-[75%] lg:max-w-[50%] min-h-150 h-full">
                    {attractionImages.map((item, index) => (
                        <div key={index} className={cn("absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0", index === attractionImageIndex && "opacity-100")}>
                            <Image src={item.src} alt={item.alt} fill className={cn("object-cover w-full h-auto")} loading="lazy" />
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