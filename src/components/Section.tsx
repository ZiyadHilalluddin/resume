import React from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => {
  return (
    <div
      id={id}
      className={`bg-white ${className}`} // No margin added here
    >
      {children}
    </div>
  );
};

export default Section;
