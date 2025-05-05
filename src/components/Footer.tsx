import React from "react";
import personal from "@/data/personal";

// Define the type for props, including className
interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`text-center text-sm text-gray-500 mt-8 ${className}`}>
      <p>© {new Date().getFullYear()} {personal.name}</p>
    </footer>
  );
}
