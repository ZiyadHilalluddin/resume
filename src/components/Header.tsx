"use client";

import personal from "@/data/personal";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="h-full bg-[#315843] text-[#ffffff] p-6 flex justify-center items-center">
      {/* Content container fixed vertically in the center of the col-span-3 */}
      <div className="md:fixed md:top-1/2 md:-translate-y-1/2 w-full max-w-[16rem]">
        {/* Content Wrapper */}
        <div className="flex flex-col items-center space-y-4">
          {/* Name */}
          <h1 className="text-3xl font-semibold text-center text-[#e0e0e0]">{personal.name}</h1>

          {/* Profile Picture */}
          <img
            src="/profile.jpg"
            alt="Ziyad Bin Ahmad"
            className="w-45 h-60 rounded-full object-cover border-4 border-[#00332a] shadow-lg hover:scale-105 transition duration-300"
          />

          {/* Title + Location */}
          <p className="text-sm text-center font-medium text-[#e0e0e0]">{personal.title}</p>
          <p className="text-xs text-center text-[#a3d9b5]">{personal.location}</p>

          {/* Contact Info */}
          <div className="mt-3 text-center text-sm space-y-1 text-[#e0e0e0]">
            <p>{personal.email}</p>
            <p>{personal.phone}</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-2xl text-[#e0e0e0]">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#006a52] hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#006a52] hover:scale-110 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
