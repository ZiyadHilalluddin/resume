"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import portfolio from "@/data/portfolio";
import { FaSpinner, FaMicrophone, FaCheckCircle, FaUserTie, FaHeart, FaFlask } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css"; // Import the styles for Lightbox




export default function Portfolio() {
    // State to control the Lightbox
    const [isOpen, setIsOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState<string[]>([]);

    // Handle opening the lightbox with the clicked image
    const openLightbox = (index: number, images: (string | StaticImageData)[]) => {
        const imageUrls = images.map((img) =>
            typeof img === "string" ? img : img.src
        );
        setCurrentImages(imageUrls);
        setIsOpen(true);
    };

    const iconClass = "text-[#315843] mr-2 shrink-0 min-w-[1.5rem] min-h-[1.5rem] text-xl sm:text-2xl md:text-3xl";

    const getIcon = (type: string): React.ReactNode => {
        switch (type) {
            case "Developing":
                return <FaSpinner className={iconClass} />;
            case "Completed":
                return <FaCheckCircle className={iconClass} />;
            case "Presentation":
                return <FaMicrophone className={iconClass} />;
            case "Freelance":
                return <FaUserTie className={iconClass} />;
            case "Personal":
                return <FaHeart className={iconClass} />;
            case "Research":
                return <FaFlask className={iconClass} />;
            case "Open Source":
                return <FaHeart className={iconClass} />;
            default:
                return null;  // Ensure that this doesn't throw an error for unknown types
        }
    };

    return (
        <section className="bg-gray-100 rounded-2xl pt-5 pb-5 pl-10 pr-10">
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">PORTFOLIO</h2>

            <div className="space-y-10">
                {portfolio.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-[#edece2] p-6 rounded-lg shadow-md"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                            <div className="sm:mr-2 mb-2 sm:mb-0 flex justify-center sm:block">
                                {item.type && getIcon(item.type)}
                            </div>
                            <h3 className="text-2xl font-semibold text-[#315843] text-center sm:text-left">
                                {item.title}
                            </h3>
                        </div>

                        {item.date && <p className="text-sm text-gray-500 mb-2">{item.date}</p>}

                        <p className="text-gray-700 mb-3">{item.description}</p>

                        {item.role && (
                            <p className="text-sm text-gray-800 mb-4">
                                <span className="font-medium">Role:</span> {item.role}
                            </p>
                        )}

                        {item.techStack && (
                            <ul className="flex flex-wrap gap-2 mb-4">
                                {item.techStack.map((tech, i) => (
                                    <li
                                        key={i}
                                        className="bg-[#d7dbd1] text-[#315843] px-3 py-1 rounded-full text-xs font-medium"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Horizontal scroll for images */}
                        <div className="overflow-x-auto mt-4">
                            <div className="flex space-x-4 min-w-max">
                                {item.images.map((src, i) => (
                                    <div
                                        key={i}
                                        className="relative w-48 h-48 rounded overflow-hidden shadow-sm cursor-pointer"
                                        onClick={() => openLightbox(i, item.images)}
                                    >
                                        <Image
                                            src={src}
                                            alt={`portfolio-${index}-${i}`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox for Image Zoom */}
            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={currentImages.map((src) => ({ src }))}
                    plugins={[Thumbnails]}
                />
            )}
        </section>
    );
}
