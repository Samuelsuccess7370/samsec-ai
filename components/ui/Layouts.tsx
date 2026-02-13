
import React from 'react';
import { motion } from 'framer-motion';

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 md:py-32 w-full relative z-10 ${className}`}>
    {children}
  </section>
);

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 ${className}`}>
    {children}
  </div>
);

export const GradientText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400 animate-gradient-x ${className}`}>
    {children}
  </span>
);

export const GlassCard: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = "", hoverEffect = true }) => {
  const MotionDiv = motion.div as any;
  return (
    <MotionDiv 
      whileHover={hoverEffect ? { y: -4, borderColor: 'rgba(34, 211, 238, 0.3)', boxShadow: '0 0 30px -10px rgba(34, 211, 238, 0.15)' } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`bg-[#0A0A0A]/80 border border-white/[0.08] rounded-2xl p-6 md:p-8 relative overflow-hidden backdrop-blur-xl ${className}`}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
      
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70" />
      
      <div className="relative z-10">
        {children}
      </div>
    </MotionDiv>
  );
};
