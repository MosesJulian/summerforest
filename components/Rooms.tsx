"use client";
import cn from "@/utils/cn";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const imageDuration = 7500;

const roomImages = [
	{
		src: "/start1.jpeg",
		alt: "Room 1"
	},
	{
		src: "/start2.jpeg",
		alt: "Room 2"
	},
	{
		src: "/start3.jpeg",
		alt: "Room 3"
	},
	{
		src: "/start4.jpeg",
		alt: "Room 4"
	},
	{
		src: "/start1.jpeg",
		alt: "Room 5"
	}
]

const breakfastImages = [
	{
		src: "/start1.jpeg",
		alt: "Room 1"
	},
	{
		src: "/start1.jpeg",
		alt: "Room 2"
	},
	{
		src: "/start1.jpeg",
		alt: "Room 3"
	},
	{
		src: "/start1.jpeg",
		alt: "Room 4"
	},
	{
		src: "/start1.jpeg",
		alt: "Room 5"
	}
]

const Rooms = () => {
	const [roomImageIndex, setRoomImageIndex] = useState(0);
	const [breakfastImageIndex, setBreakfastImageIndex] = useState(0);

	const handleNext = (setIndex: Dispatch<SetStateAction<number>>) => setIndex((prev) => (prev + 1) % roomImages.length);

  	const handlePrev = (setIndex: Dispatch<SetStateAction<number>>) => setIndex((prev) => prev <= 0 ? roomImages.length - 1 : prev - 1);

	useEffect(() => {
		const interval = setInterval(() => handleNext(setRoomImageIndex), imageDuration);
		return () => clearInterval(interval);
	}, []);
	return (
		<section className="flex flex-col items-center justify-center p-4 w-full gap-4">
			<h2 className="text-3xl font-bold">Our Rooms</h2>
			<div className="flex flex-col gap-4 p-8 rounded-2xl border border-primary/30 shadow-2xl shadow-secondary/30">
				<div className="items-center justify-center relative bg-black/25">
					<button className="absolute z-10 left-0 top-1/2 -translate-y-1/2" onClick={() => handlePrev(setRoomImageIndex)}><FaLessThan size={30} color="white" /></button>
					<div className="relative w-full min-h-100 h-full">
						{roomImages.map((item, index) => (
							<Image key={index} src={item.src} alt={item.alt} fill className={cn("w-full h-auto transition-opacity duration-500 opacity-0", index === roomImageIndex && "opacity-100")} />
						))}
					</div>
					<button className="absolute z-10 right-0 top-1/2 -translate-y-1/2" onClick={() => handleNext(setRoomImageIndex)}><FaGreaterThan size={30} color="white" /></button>
				</div>

				<div className="gap-4 justify-around">
					<span className="text-2xl">
						Facilities and amenities for every room:
					</span>
					<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 list-disc list-inside text-xl">
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
					<span className="text-2xl">
						Our breakfast options:
					</span>
					<div className="items-center justify-center relative bg-black/25">
						<button className="absolute z-10 left-0 top-1/2 -translate-y-1/2" onClick={() => handlePrev(setBreakfastImageIndex)}><FaLessThan size={30} color="white" /></button>
						<div className="relative w-full min-h-100 h-full rounded-2xl">
							{breakfastImages.map((item, index) => (
								<Image key={index} src={item.src} alt={item.alt} fill className={cn("w-full h-auto transition-opacity duration-500 opacity-0", index === breakfastImageIndex && "opacity-100")} />
							))}
						</div>
						<button className="absolute z-10 right-0 top-1/2 -translate-y-1/2" onClick={() => handleNext(setBreakfastImageIndex)}><FaGreaterThan size={30} color="white" /></button>
					</div>
				</div>

			</div>
		</section>
	);
}

export default Rooms;