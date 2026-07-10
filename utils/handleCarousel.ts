import { Dispatch, SetStateAction } from "react";

const handleNext = (imageArray: { src: string; alt: string }[], setIndex: Dispatch<SetStateAction<number>>) => setIndex((prev) => (prev + 1) % imageArray.length);

const handlePrev = (imageArray: { src: string; alt: string }[], setIndex: Dispatch<SetStateAction<number>>) => setIndex((prev) => prev <= 0 ? imageArray.length - 1 : prev - 1);

export { handleNext, handlePrev };