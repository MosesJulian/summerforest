"use client";
import cn from "@/utils/cn";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { handleNext, handlePrev } from "@/utils/handleCarousel";

const imageDuration = 7500;

const roomImages = [
	{
		src: "/room1.jpg",
		alt: "Bed view of the room"
	},
	{
		src: "/room2.jpg",
		alt: "Outside view of the room"
	},
	{
		src: "/room3.jpg",
		alt: "Room TV and table"
	},
	{
		src: "/room4.jpg",
		alt: "Bathroom sink and mirror"
	},
	{
		src: "/room5.jpg",
		alt: "Bathroom bathtub and shower"
	},
	{
		src: "/room6.jpg",
		alt: "Bathroom toilet and bath basket"
	},
	{
		src: "/room7.jpg",
		alt: "Room wardrobe and drawers"
	},
]

const breakfastImages = [
	{
		src: "/breakfast1.jpg",
		alt: "Bread, eggs, and sausage"
	},
	{
		src: "/breakfast2.jpg",
		alt: "Bread, eggs, and green beans"
	},
	{
		src: "/breakfast3.jpg",
		alt: "Mie Goreng with fried egg and vegetables"
	},
	{
		src: "/breakfast4.jpg",
		alt: "Nasi Goreng with fried egg and vegetables"
	},
	{
		src: "/breakfast5.jpg",
		alt: "Juice, coffee, or tea included"
	}
]

const Rooms = () => {
	const [roomImageIndex, setRoomImageIndex] = useState(0);
	const [breakfastImageIndex, setBreakfastImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => handleNext(roomImages, setRoomImageIndex), imageDuration);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => handleNext(breakfastImages, setBreakfastImageIndex), imageDuration);
		return () => clearInterval(interval);
	}, []);
	return (
		<section className="flex flex-col items-center justify-center p-4 w-full gap-4 scroll-mt-18" id="rooms">
			<h2 className="text-4xl font-bold text-center">Our Rooms</h2>
			<div className="flex flex-col gap-4 p-4 sm:p-8 rounded-2xl border border-primary/30 shadow-2xl shadow-secondary/30">
				<div className="items-center justify-center relative bg-black/25">
					<button
						className="absolute z-10 left-0 top-1/2 -translate-y-1/2 h-full hover:bg-black/20 transition-colors duration-300 text-white"
						onClick={() => handlePrev(roomImages, setRoomImageIndex)}
					>
						<FaLessThan size={30} />
					</button>
					<div className="relative w-full min-h-150 h-full">
						{roomImages.map((item, index) => (
							<div key={index} className={cn("absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0", index === roomImageIndex && "opacity-100")}>
								<Image src={item.src} alt={item.alt} fill className={cn("object-cover w-full h-auto")} loading="lazy" sizes="100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw" />
								<div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
									<h3 className="text-xl font-bold">{item.alt}</h3>
								</div>
							</div>
						))}
					</div>
					<button
						className="absolute z-10 right-0 top-1/2 -translate-y-1/2 h-full hover:bg-black/20 transition-colors duration-300 text-white"
						onClick={() => handleNext(roomImages, setRoomImageIndex)}
					>
						<FaGreaterThan size={30} />
					</button>
				</div>

				<div className="gap-4 justify-around">
					<span className="text-lg md:text-2xl">
						Facilities and amenities for every room:
					</span>
					<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 list-disc list-inside text-base md:text-xl text-gray-500">
						<li>Parking Area</li>
						<li>Swimming Pool for All Guests</li>
						<li>Air Conditioning (AC)</li>
						<li>Breakfast Included</li>
						<li>Smart TV</li>
						<li>Netflix and Youtube Premium</li>
						<li>King size bed 200cm x 200cm</li>
						<li>Hot water for showering</li>
						<li>Hairdryer</li>
						<li>A balcony</li>
						<li>Electric water kettle</li>
						<li>Room size 30m<span className="align-super text-xs">2</span></li>
						<li>Bathtub</li>
						<li>A lush and cool view of the forest</li>
					</ul>
				</div>
				<div>
					<span className="text-lg md:text-2xl">
						Our breakfast options:
					</span>
					<div className="items-center justify-center relative bg-black/25">
						<button
							className="absolute z-10 left-0 top-1/2 -translate-y-1/2 h-full hover:bg-black/20 transition-colors duration-300 text-white"
							onClick={() => handlePrev(breakfastImages, setBreakfastImageIndex)}
						>
							<FaLessThan size={30} />
						</button>
						<div className="relative w-full min-h-150 h-full rounded-2xl">
							{breakfastImages.map((item, index) => (
								<div key={index} className={cn("absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0", index === breakfastImageIndex && "opacity-100")}>
									<Image src={item.src} alt={item.alt} fill className={cn("object-cover w-full h-auto")} loading="lazy" sizes="100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw" />
									<div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
										<h3 className="text-xl font-bold">{item.alt}</h3>
									</div>
								</div>
							))}
						</div>
						<button
							className="absolute z-10 right-0 top-1/2 -translate-y-1/2 h-full hover:bg-black/20 transition-colors duration-300 text-white"
							onClick={() => handleNext(breakfastImages, setBreakfastImageIndex)}
						>
							<FaGreaterThan size={30} />
						</button>
					</div>
				</div>

			</div>
		</section>
	);
}

export default Rooms;