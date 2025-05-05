"use client";
import { useEffect, useRef, useState } from "react";
import education from "@/data/education";

export default function Education() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index); // Only set activeIndex when the element is in view
          }
        });
      },
      {
        root: null,
        threshold: 0.3, // Change threshold to trigger earlier when an item comes into view
        rootMargin: "0px 0px -0% 0px", // Adjust rootMargin to extend the detection zone
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="p-8">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">EDUCATION</h2>

      {/* Container */}
      <div className="relative flex justify-center">
        {/* Vertical line and dots */}
        <div className="relative w-16 flex flex-col items-center justify-center">
          {/* Centered vertical line */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-1 bg-gray-300" />

          {/* Dots */}
          {education.map((_, index) => (
            <div
              key={index}
              className="relative z-10 w-8 h-8 rounded-full my-6 border-4 border-white shadow-md transition-colors duration-300"
              style={{
                backgroundColor:
                  activeIndex === index ? "#315843" : "#d1d5db", // Match the active color from Experience
              }}
            />
          ))}
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-auto max-h-[35vh] pl-8 lg:pr-22 scrollbar-hidden my-8 md:snap-y md:snap-mandatory md:scroll-smooth">
          <div className="space-y-8 py-8">  
            {education.map((item, index) => (
              <div
                key={index}
                data-index={index}
                ref={(el) => { if (el) itemRefs.current[index] = el }}
                className={`bg-[#edece2] p-6 rounded-lg shadow-md transition-all duration-300 min-h-[200px] md:snap-center ${
                  activeIndex === index
                    ? "opacity-100 scale-[1.02] border-l-4 border-[#315843]" // Active state
                    : "opacity-0 scale-100 pointer-events-none" // Hide inactive items and prevent interaction
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800">{item.degree} ({item.cgpa})</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {item.year}
                </p>
                <p className="text-[#4a9b8d] font-medium mb-2">{item.institution}</p>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-6">
                  {item.focus && (
                    <li>{item.focus}</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
