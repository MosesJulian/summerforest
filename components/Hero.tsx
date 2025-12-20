"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface CarouselItem {
    imageUrl: string;
    altText: string;
    caption: string;
}

const CarouselItems: CarouselItem[] = [
    {
        imageUrl: '/start1.jpeg',
        altText: 'By the pool side',
        caption: 'Relax and Enjoy the Pool View',
    },
    {
        imageUrl: '/start2.jpeg',
        altText: 'Breakfast time',
        caption: 'Enjoy your Delicious Morning Meal',
    },
    {
        imageUrl: '/start3.jpeg',
        altText: 'Cappuccino by the pool',
        caption: 'Drink your Coffee by the Pool',
    },
    {
        imageUrl: '/start4.jpeg',
        altText: 'Banana yogurt desert',
        caption: 'Eat a Tasty Dessert made with Fresh Ingredients',
    },
]

const SlideDuration = 5000;
const TransitionDuration = 1000;

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselItems.length);
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, SlideDuration);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className='w-full h-screen block overflow-hidden '>
                <div className="relative w-full h-full overflow-hidden">
                    <div
                    className='flex h-full transition-transform ease-in-out'
                    style={{ transform: `translateX(-${currentIndex * 100}%)`, transitionDuration: `${TransitionDuration}ms` }}
                    >
                        {CarouselItems.map((item, index) => (
                            <div key={index} className='w-full h-full relative flex-none bg-linear-b bg-background/30'>
                                <Image
                                    src={item.imageUrl}
                                    alt={item.altText}
                                    fill 
                                    objectFit='cover'
                                />
                                <div 
                                    className="absolute inset-0 z-0 bg-linear-b bg-primary/30"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                                    <p className="text-text-secondary text-6xl font-extrabold tracking-tight p-4 text-center">
                                    {item.caption}
                                    </p>
                                    <Link
                                        href={"https://www.booking.com/hotel/id/summerforest-watukarung.html"}
                                        target="_blank"
                                        className="mt-6 px-8 py-3 bg-primary text-text-secondary font-medium rounded-lg shadow-lg hover:bg-secondary transition duration-300 transform hover:scale-105"    
                                    >
                                        Book Your Stay Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    )};

export default Hero;