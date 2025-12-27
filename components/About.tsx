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
        <section className="flex flex-col">
            <div 
            data-inviewport="fade-slide-left"
            className="grid grid-cols-5 gap-6 items-center justify-center bg-linear-to-b from-primary/60 to-secondary/60">
                <p className="text-2xl leading-7 text-text-secondary col-span-3 text-left px-24 font-semibold">
                    <span className="text-text">Summerforest</span> is dedicated to ensuring your retreat is as <span className="text-text">comfortable, hassle-free, and memorable</span> as possible. We provide guests with a full range of <span className="text-text">premium amenities and personalized services.</span> With our attentive staff, your escape can be as perfectly relaxing or adventurously active as you desire.
                        
                </p>
                <Image src="/start1.jpeg" alt="About Summerforest" width={800} height={500} className="rounded-l-full shadow-lg col-span-2" />
            </div>
            <div
            data-inviewport="fade-slide-right"
            className="grid grid-cols-3 gap-6 items-center justify-center bg-linear-to-b from-secondary/60 to-primary/60">
                <Image src="/start2.jpeg" alt="About Summerforest" width={800} height={500} className="rounded-r-full shadow-lg col-span-1" />
                <p className="text-2xl leading-7 text-text col-span-2 text-right px-24 font-semibold">
                    Nestled in a serene forest setting, <span className="text-text-secondary">Summerforest</span> offers a <span className="text-text-secondary">unique blend of rustic charm and modern comfort.</span> Whether you&apos;re seeking a peaceful getaway or an exciting outdoor adventure, our retreat provides the perfect backdrop for <span className="text-text-secondary">creating lasting memories with family and friends.</span>
                </p>
            </div>
        </section>
    )
};

export default About;