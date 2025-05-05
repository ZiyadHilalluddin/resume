"use client";
import { motion } from "framer-motion";
import skills from "@/data/skills";

export default function Skills() {
  return (
    <section className="p-8 bg-gray-100 rounded-2xl">
      <motion.h2
        className="text-4xl font-extrabold text-center text-green-700 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        SKILLS
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:bg-green-50 transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <motion.h3
              className="text-2xl font-semibold text-green-600 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              {group.category}
            </motion.h3>
            <ul className="flex flex-wrap gap-4">
              {group.items.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#edece2] text-green-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
