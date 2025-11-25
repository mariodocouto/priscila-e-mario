import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1516233758813-a38d024919c5?q=80&w=600&auto=format&fit=crop', // Casal na neve/montanha
  'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=600&auto=format&fit=crop', // Casal na praia
  'https://images.unsplash.com/photo-1501901609772-df0848060b33?q=80&w=600&auto=format&fit=crop', // Casal pôr do sol
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop', // Casal no campo
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-rose-50 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-rose-900 mb-12"
        >
          Nossos Momentos
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-lg aspect-[3/4] shadow-md group"
            >
              <img 
                src={src} 
                alt="Casal em paisagem bonita" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-rose-900/10 group-hover:bg-transparent transition-colors" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/50 backdrop-blur-sm p-4 rounded-xl inline-block border border-rose-100"
        >
          <p className="text-rose-700 italic text-sm md:text-base">
            * fotos genéricas de casais felizes porque não temos nenhuma foto ainda, o que é um absurdo
          </p>
        </motion.div>
      </div>
    </section>
  );
};