import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';

export const Proposal: React.FC = () => {
  const [accepted, setAccepted] = useState(false);
  const [thinkBtnPosition, setThinkBtnPosition] = useState({ x: 0, y: 0 });
  const [showThinkError, setShowThinkError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYes = () => {
    setAccepted(true);
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const moveThinkButton = () => {
    // Generate random positions between -150 and 150 pixels from original
    const newX = Math.random() * 300 - 150;
    const newY = Math.random() * 300 - 150;
    setThinkBtnPosition({ x: newX, y: newY });
  };

  const handleThinkClick = () => {
    setShowThinkError(true);
    setTimeout(() => {
        // Scroll to top as penalty
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => setShowThinkError(false), 2000);
    }, 2500);
  };

  return (
    <section ref={containerRef} className="min-h-screen relative flex flex-col items-center justify-center p-6 bg-white overflow-hidden">
      {/* Ambient background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-100"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Heart size={Math.random() * 30 + 10} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="z-10 text-center max-w-3xl">
        <AnimatePresence mode="wait">
          {!accepted ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="space-y-12"
            >
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-rose-900 drop-shadow-sm">
                Priscila...
              </h2>
              <p className="text-3xl md:text-4xl text-rose-800 font-light">
                quer namorar comigo?
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-12 min-h-[160px]">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYes}
                  className="px-12 py-4 bg-rose-600 text-white rounded-full text-xl font-bold shadow-xl hover:bg-rose-700 transition-all flex items-center gap-2"
                >
                  <Heart fill="currentColor" size={24} />
                  SIM!
                </motion.button>

                <div className="relative">
                    <motion.button
                    animate={{ x: thinkBtnPosition.x, y: thinkBtnPosition.y }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onMouseEnter={moveThinkButton}
                    onClick={handleThinkClick} // Fallback for mobile/touch
                    className="px-8 py-4 bg-gray-200 text-gray-600 rounded-full text-lg font-medium shadow-md hover:bg-gray-300 transition-colors"
                    >
                    Pensar...
                    </motion.button>
                </div>
              </div>
              
              {showThinkError && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 font-bold bg-red-50 p-4 rounded-lg border border-red-200 mt-4"
                  >
                      Tu tem 15 segundos para pensar e voltar pro início!
                  </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-block p-6 rounded-full bg-rose-100 text-rose-600 mb-4">
                <Sparkles size={64} />
              </div>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-rose-900">
                Glória!
              </h2>
              <p className="text-2xl md:text-3xl text-rose-700">
                Ficante não dava mais...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};