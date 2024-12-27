'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpg';
import Image from 'next/image';
import four from '../images/five.jpg';
import six from '../images/six.jpg'
import BirthdayMessageSection from './birthdayMessage';
import BirthdayHeroSection from './herosection'


const GlossyBirthdayWebsite = () => {
 
  
  const celebrant = {
    name: "Mr. Emmanuel Bawa",
    birthdayDate: "2025-01-15T18:00:00",
    images: [
      {
        url: four,
        title: "A loving Father",
        description: "Thank you for the immense sacrifices to many. Taking the need of others above yours."
      },
      {
        url: two,
        title: "Elegance in Motion",
        description: "Capturing the essence of grace and sophistication, this moment reflects the true reflection of God's Love."
      },
      {
        url: six,
        title: "A Mentor",
        description: "A guiding light of wisdom and compassion, inspiring growth and illuminating the path for others, Thank you for always being there for us. "
      }
    ]
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Hero Section */}
      {/* <motion.div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(255,255,255,0.4))] backdrop-blur-sm" />
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            className="mb-8 p-12 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {celebrant.name}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-400 font-light">
              A Celebration of Grace & Elegance
            </p>
          </motion.div>
        </div>
      </motion.div> */}
      <BirthdayHeroSection 
        celebrant={{ name: celebrant.name }} 
        backgroundImage= {one}
        />

      {/* Countdown Section */}
      {/* <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {Object.entries(countdown).map(([unit, value]) => (
              <motion.div
                key={unit}
                className="relative group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50"
                  style={{
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.9)',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
                    backdropFilter: 'blur(10px)'
                  }}>
                  <span className="block text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                    {value}
                  </span>
                  <span className="text-blue-400 uppercase tracking-wider text-sm">{unit}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div> */}
      <BirthdayMessageSection />
      {/* Glossy Photo Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            {celebrant.images.map((image, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-200 to-blue-100 transform -rotate-1 scale-105 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative rounded-3xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.05)',
                      backdropFilter: 'blur(10px)'
                    }}>
                    <Image
                      src={image.url}
                      alt={image.title}
                      className="w-full h-[400px]  md:h-[800px] object-cover rounded-t-3xl  mx-auto"
                      style={{
                        filter: 'contrast(1.1) brightness(1.1)',
                      }}
                    />
                    <div className="p-6 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold text-blue-600 mb-2">{image.title}</h3>
                      <p className="text-blue-400 font-light leading-relaxed">{image.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="hidden md:block relative">
            <div className="sticky top-20 h-fit space-y-6 pl-8">
              {celebrant.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="opacity-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="h-32 flex items-center">
                    <p className="text-blue-400 font-light leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer 
        className="py-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-2xl font-light bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Thank you for heeding to the call sir.
         
        </p>
        <span className="font-extrabold">
          <p> We shall keep celebrating as God takes you from Glory to Glory.</p>
         </span>
      </motion.footer>
    </div>
  );
};

export default GlossyBirthdayWebsite;