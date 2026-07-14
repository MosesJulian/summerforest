"use client";
import Image from "next/image";
import { useEffect } from "react";

const About = () => {
    
    useEffect(() => {
        const inViewport = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("in-viewport", entry.isIntersecting);
            });
        };

        const observer = new IntersectionObserver(inViewport, {
            threshold: 0.15,
        });

        document.querySelectorAll("[data-inviewport]").forEach((section) => {
            observer.observe(section);
        })
    }, []);

    return (
        <section className="flex flex-col overflow-x-hidden scroll-mt-18" id="about">
            <div 
            data-inviewport="fade-slide-left"
            className="gap-6 items-center justify-between bg-linear-to-b from-primary/60 to-secondary/60 grid grid-cols-5">
                <p className="text-base sm:text-2xl md:text-3xl lg:text-4xl md:leading-10 leading-6 text-black text-left px-4 lg:px-24 font-semibold col-span-3">
                    <span className="text-white">Summerforest</span> is dedicated to ensuring your retreat is as <span className="text-white">comfortable, hassle-free, and memorable</span> as possible. We provide guests with a full range of <span className="text-white">premium amenities and personalized services.</span> With our attentive staff, your escape can be as perfectly relaxing or adventurously active as you desire.
                        
                </p>
                <div className="relative w-full h-full min-h-125 max-h-150 col-span-2">
                    <Image src="/about1.jpg" alt="About Summerforest" fill className="object-cover rounded-bl-full shadow-lg h-full" loading="lazy" sizes="100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw" />
                </div>
            </div>
            <div
            data-inviewport="fade-slide-right"
            className="gap-6 items-center justify-between bg-linear-to-b from-secondary/60 to-primary/60 grid grid-cols-5">
                <div className="relative w-full h-full min-h-125 max-h-150 col-span-2">
                    <Image src="/about2.jpg" alt="About Summerforest" fill className="object-cover rounded-tr-full shadow-lg h-full" loading="lazy" sizes="100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw" />
                </div>
                <p className="text-base sm:text-2xl md:text-3xl lg:text-4xl md:leading-10 leading-6 text-black text-right px-4 lg:px-24 font-semibold col-span-3">
                    Nestled in a serene forest setting, <span className="text-white">Summerforest</span> offers a <span className="text-white">unique blend of rustic charm and modern comfort.</span> Whether you&apos;re seeking a peaceful getaway or an exciting outdoor adventure, our retreat provides the perfect backdrop for <span className="text-white">creating lasting memories with family and friends.</span>
                </p>
            </div>
        </section>
    )
};

export default About;