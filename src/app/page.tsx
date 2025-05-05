import React from "react";
import Header from "@/components/Header";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

const Home = () => {
  return (
    <div className="md:grid md:grid-cols-12 md:h-screen h-auto m-0 p-0">
  {/* Left: Header, full height only on md+, no padding */}
  <aside className="md:col-span-3 md:sticky md:top-0 h-full m-0 p-0">
    <Header />
  </aside>

      {/* Right: Content area with scroll if needed */}
      <main className="md:col-span-9">
        <Section id="experience">
          <Experience />
        </Section>

        <Section id="education">
          <Education />
        </Section>

        <Section id="skills">
          <Skills />
        </Section>

        <Footer className="bg-gray-800 text-white text-center mt-8 py-4 rounded-md shadow-md" />
      </main>
    </div>
  );
};

export default Home;
