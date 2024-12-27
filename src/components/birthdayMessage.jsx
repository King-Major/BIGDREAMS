import React from 'react';
import { motion } from 'framer-motion';

const BirthdayMessageSection = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div 
            className="p-12 rounded-3xl text-center"
            style={{
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.9)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
              backdropFilter: 'blur(10px)'
            }}
          >
            <motion.h2 
              className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Happy Birthday Our Daddy
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-lg md:text-xl text-blue-600/80 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p>
                With profound respect and admiration, we celebrate an individual whose grace, wisdom, and remarkable spirit have touched countless lives. Your journey has been a testament to dignity, perseverance, and unwavering kindness.
              </p>
              
              <div className="w-24 h-px bg-gradient-to-r from-blue-400 to-blue-200 mx-auto my-8" />
              
              <p>
                As we honor another year of your remarkable presence, we recognize not just the milestones you've achieved, but the lives you've enriched with your genuine warmth and inspiring leadership. May this year bring you the same joy and light that you've brought to others.

                We won't be able to say all the things we are grateful for but this little we say. 
                THANK YOU SIR!
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-10 pt-40"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-sm uppercase tracking-widest text-blue-400 font-light">
                With deepest appreciation and warmest wishes
              </span>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -bottom-4 -left-4 -right-4 bg-gradient-to-r from-blue-50 to-white -z-10 rounded-3xl transform -rotate-1" />
        </motion.div>
      </div>
    </div>
  );
};

export default BirthdayMessageSection;