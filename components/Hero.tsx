import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Heart } from 'lucide-react';

const AUDIO_URL = "https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3"; // Som de brilho mágico suave

export const Hero: React.FC = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubtitle(true), 2500);
    const timer2 = setTimeout(() => setShowButton(true), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleStart = () => {
    // Play subtle sound
    try {
      const audio = new Audio(AUDIO_URL);
      audio.volume = 0.4; // Volume baixo para ser sutil
      audio.play().catch((e) => console.log("Audio play blocked by browser", e));
    } catch (error) {
      console.error("Audio error", error);
    }

    const timeline = document.getElementById('timeline-section');
    timeline?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-gradient-to-b from-rose-50 to-white">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-20 left-10 text-rose-200 opacity-50"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={64} fill="currentColor" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 text-rose-200 opacity-50"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={48} fill="currentColor" />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-rose-900 mb-6 leading-tight"
      >
        Tenho algo especial <br/> para te dizer...
      </motion.h1>

      <div className="h-24 md:h-32 flex items-center justify-center">
        {showSubtitle && (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl text-rose-600 font-light italic"
          >
            Ficante é tão coisa de ensino médio
          </motion.p>
        )}
      </div>

      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStart}
          className="mt-8 px-8 py-4 bg-rose-500 text-white rounded-full text-lg font-medium shadow-lg hover:bg-rose-600 transition-colors flex items-center gap-2 group"
        >
          Começar
          <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
        </motion.button>
      )}
    </section>
  );
};