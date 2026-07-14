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
        imageUrl: '/start1.jpg',
        altText: 'Summerforest Villa pool and arched facade surrounded by tropical greenery',
        caption: 'Soak in the jacuzzi, feel the sun on your skin, and let the lush jungle surroundings melt every worry away.',
    },
    {
        imageUrl: '/start2.jpg',
        altText: 'Outdoor stone pavilion beside the pool at Summerforest Villa Watukarung',
        caption: 'Lounge in a one-of-a-kind rock sanctuary, carved by nature and designed for those who seek something truly different.',
    },
    {
        imageUrl: '/start3.jpg',
        altText: 'Tropical garden view of Summerforest Villa exterior in Watukarung',
        caption: 'Wake up to the sound of tropical leaves rustling in the breeze, just steps from your private villa.',
    },
    {
        imageUrl: '/start4.jpg',
        altText: 'Summerforest Villa compound with pool, open living pavilion and palm trees in Watukarung Pacitan',
        caption: 'Your own slice of Java — a private villa compound where every corner invites you to slow down, breathe deep, and stay a little longer.',
    },
]

const imageDuration = 7500;
const transitionDuration = 2500;

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const bookingMessage = encodeURIComponent("Hello, I would like to book a stay at Summerforest Watukarung. Could you please provide me with more information?");
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselItems.length);
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, imageDuration);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className='w-full h-screen block overflow-hidden' id="hero">
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
                                    transitionDuration: `${transitionDuration}ms`,
                                    pointerEvents: isActive ? 'auto' : 'none',
                                    zIndex: isActive ? 20 : 10
                                }}
                                >
                                <Image
                                    src={item.imageUrl}
                                    alt={item.altText}
                                    fill 
                                    className='object-cover'
                                    loading="lazy"
                                    sizes="100vw"
                                />
                                <div 
                                    className="absolute inset-0 z-0 bg-linear-to-b from-black/35 to-primary/35"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                                    <p className="text-white text-4xl lg:text-6xl font-extrabold tracking-tight p-4 text-center">
                                    {item.caption}
                                    </p>
                                    <Link
                                        href={`https://api.whatsapp.com/send/?phone=%2B6285280010087&text=${bookingMessage}&type=phone_number&app_absent=0`}
                                        target="_blank"
                                        className="mt-6 px-8 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-secondary transition duration-300 transform hover:scale-105"    
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