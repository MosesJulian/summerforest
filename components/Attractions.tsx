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
		description: "Goa Gong is known for its stalactite and stalagmite formations, as well as its unique natural beauty. The cave is a popular tourist destination by those interested in exploring natural wonders and geological formations."
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
        description: "Puncak Kasap is a scenic mountain peak offering breathtaking views of the surrounding landscape. It is a popular destination for hikers and nature enthusiasts looking to experience the beauty of the area."
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">Nearby Attractions</h2>
            <div className="flex w-full items-stretch justify-center p-4">
                <div className="relative w-full lg:w-[75%] xl:w-[50%] aspect-video">
                    <button
                        className="absolute z-10 left-0 top-1/2 -translate-y-1/2 h-full hover:bg-black/20 transition-colors duration-300 text-white px-2"
                        onClick={() => handlePrev(attractionImages, setAttractionImageIndex)}
                    >
                        <FaLessThan size={30} />
                    </button>
                    {attractionImages.map((item, index) => (
                        <div key={index} className={cn("absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0", index === attractionImageIndex && "opacity-100")}>
                            <Image src={item.src} alt={item.alt} fill className={cn("object-cover w-full h-auto")} loading="lazy" sizes="(max-width: 768px) 75vw, (max-width: 1024px) 50vw, 100vw" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 md:p-4">
                                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">{item.alt}</h3>
                                <p className="hidden sm:block text-sm md:text-base">{item.description}</p>
                            </div>
                        </div>
                    ))}
                    <button
                        className="absolute z-10 right-0 top-1/2 -translate-y-1/2 h-full hover:bg-black/20 transition-colors duration-300 text-white px-2"
                        onClick={() => handleNext(attractionImages, setAttractionImageIndex)}
                    >
                        <FaGreaterThan size={30} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Attractions;