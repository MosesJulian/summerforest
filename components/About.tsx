"use client";
import cn from "@/utils/cn";
import Image from "next/image";

const sections = [
  {
    tag: "Watukarung, Pacitan",
    heading: "Where the jungle meets your morning coffee",
    body: "Nestled in the hills just minutes from Watukarung's famous surf break, Summerforest is where you come to slow down — or not. Whether you're chasing waves or doing absolutely nothing by the pool, we've got you.",
    src: "/about1.jpg",
    alt: "Pool and jacuzzi at Summerforest Villa surrounded by jungle",
    reverse: false,
  },
  {
    tag: "Nature & comfort",
    heading: "Surrounded by nature, not a single compromise",
    body: "Lush tropical gardens, open-air pavilions carved into the hillside, and a pool so clear it hardly feels real. Every corner of Summerforest was designed to make you forget what day it is.",
    src: "/about2.jpg",
    alt: "Jungle pavilion and gardens at Summerforest Villa Watukarung",
    reverse: true,
  },
  {
    tag: "Stay with us",
    heading: "Your home away from home — just much better",
    body: "Thoughtfully designed rooms, fresh local breakfasts, and staff who actually care. Come for the surf, stay for the vibes, leave already planning your next trip back.",
    src: "/about3.jpg",
    alt: "Summerforest Villa exterior with tropical garden pathway",
    reverse: false,
  },
];

const About = () => {
    return (
    <section id="about" className="scroll-mt-18 max-w-5xl mx-auto px-4 py-16">
      <div className="flex flex-col gap-16">
        {sections.map((section, index) => (
          <div key={index}>
            <div
              className={cn("grid grid-cols-1 md:grid-cols-2 gap-12 items-center", {
                "md:[&>*:first-child]:order-2": section.reverse
              })}
            >
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                <Image src={section.src} alt={section.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs px-3 py-1 rounded-md bg-green-100 text-green-800 w-fit">
                  {section.tag}
                </span>
                <h2 className="text-2xl font-medium leading-snug">{section.heading}</h2>
                <p className="text-gray-500 leading-relaxed">{section.body}</p>
              </div>
            </div>

            {index < sections.length - 1 && (
              <hr className="mt-16 border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </section>
    )
};

export default About;