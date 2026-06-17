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

const FadeDuration = 7500;
const TransitionDuration = 2500;

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const bookingMessage = encodeURIComponent("Hello, I would like to book a stay at Summerforest Watukarung. Could you please provide me with more information?");
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselItems.length);
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, FadeDuration);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className='w-full h-screen block overflow-hidden'>
                <div className="relative z-0 w-full h-full overflow-hidden">
                    <div
                        className='relative w-full h-full'
                    >
                        {CarouselItems.map((item, index) => {
                            const isActive = index === currentIndex;
                            return (
                            <div 
                                key={index}
                                className='absolute inset-0 w-full h-full transition-opacity ease-in-out'
                                style={{
                                    opacity: isActive ? 1 : 0,
                                    transitionDuration: `${TransitionDuration}ms`,
                                    pointerEvents: isActive ? 'auto' : 'none',
                                    zIndex: isActive ? 20 : 10
                                }}
                                >
                                <Image
                                    src={item.imageUrl}
                                    alt={item.altText}
                                    fill 
                                    className='object-cover'
                                />
                                <div 
                                    className="absolute inset-0 z-0"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                                    <p className="text-text-secondary [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000] text-6xl font-extrabold tracking-tight p-4 text-center">
                                    {item.caption}
                                    </p>
                                    <Link
                                        href={`https://api.whatsapp.com/send/?phone=%2B6285280010087&text=${bookingMessage}&type=phone_number&app_absent=0`}
                                        target="_blank"
                                        className="mt-6 px-8 py-3 bg-primary text-text-secondary font-medium rounded-lg shadow-lg hover:bg-secondary transition duration-300 transform hover:scale-105"    
                                    >
                                        Book Your Stay Now
                                    </Link>
                                </div>
                            </div>
                        );
                        })}
                    </div>
                </div>
            </section>
    )};

export default Hero;