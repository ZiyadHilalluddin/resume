"use client";
import { useEffect, useRef, useState } from "react";
import experience from "@/data/experience";

export default function Experience() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      { root: null, threshold: 0.5 }
    );
  
    const currentRefs = [...itemRefs.current]; 
  
    currentRefs.forEach((el) => {
      if (el) observer.observe(el);
    });
  
    return () => {
      currentRefs.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  

  return (
    <section className="bg-gray-100 rounded-2xl p-5">



      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">EXPERIENCE</h2>

      {/* Container */}
      <div className="relative flex justify-center">
        {/* Vertical line and dots */}
        <div className="relative w-16 flex flex-col items-center justify-center">
          {/* Centered vertical line */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-1 bg-gray-300" />

          {/* Dots */}
          {experience.map((_, index) => (
            <div
              key={index}
              className="relative z-10 w-8 h-8 rounded-full my-6 border-4 border-white shadow-md"
              style={{
                backgroundColor:
                  activeIndex === index ? "#315843" : "#d1d5db", 
              }}
            />
          ))}
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-auto max-h-[60vh] md:max-h-[35vh] pl-8 space-y-8 md:snap-y md:snap-mandatory md:scroll-smooth scrollbar-hidden pt-8 lg:pr-22">
          {experience.map((item, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => { if (el) itemRefs.current[index] = el }}
              className={`bg-[#edece2] p-6 rounded-lg shadow-md transition-opacity duration-500 md:snap-center ${
                activeIndex === index
                  ? "opacity-100 border-l-4 border border-[#315843] py-8"
                  : "opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800">{item.role}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {item.start} – {item.end}
              </p>
              <p className="text-[#4a9b8d] font-medium mb-2">{item.company}</p>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
