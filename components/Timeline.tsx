import React from 'react';
import { motion } from 'framer-motion';

const phrases = [
  "Desde que te vi...",
  "Soube que queria te conhecer e me aproximar de ti...",
  "E quanto mais o tempo passa...",
  "Mais eu tenho certeza do que eu quero."
];

export const Timeline: React.FC = () => {
  return (
    <section id="timeline-section" className="min-h-screen bg-white py-20 px-6 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full space-y-24 md:space-y-32">
        {phrases.map((phrase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div className="bg-rose-50 p-6 md:p-8 rounded-2xl shadow-sm border border-rose-100 max-w-xs md:max-w-md">
              <p className="font-serif text-2xl md:text-3xl text-rose-800 leading-relaxed">
                {phrase}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};