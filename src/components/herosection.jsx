import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FloatingParticles from './animation'
const BirthdayHeroSection = ({ celebrant, backgroundImage }) => {
  return (
    <motion.div 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Multiple Overlay Layers for Depth */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" /> */}
        <div className="absolute inset-0 backdrop-blur-sm" />
        {/* <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(255,255,255,0.4))]" /> */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 mt-[-5vh]">
        <motion.div
          className="mb-8 p-12 rounded-3xl backdrop-blur-md"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Main Title with Animation */}
          <motion.h1 
            className="text-5xl md:text-8xl font-bold mb-6 text-[#07346a]"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"      
            }}
            >
            {celebrant.name} 
            </motion.h1>


          {/* Subtitle */}
          <motion.p 
            className="text-2xl md:text-3xl text-blue-400 font-light tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            A Celebration of Grace & Elegance
          </motion.p>

          {/* Decorative Line */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-200 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <FloatingParticles/>
    </motion.div>
  );
};

export default BirthdayHeroSection;