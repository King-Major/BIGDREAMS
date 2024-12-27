import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  // State to store the random positions
  const [randomPositions, setRandomPositions] = useState([]);

  useEffect(() => {
    // Only run this on the client side
    const positions = [...Array(3)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.5
    }));

    setRandomPositions(positions);
  }, []); // Empty dependency array to only run on mount

  return (
    <div className="absolute inset-0 pointer-events-none">
      {randomPositions.map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-200 to-transparent"
          initial={{ 
            x: position.x,
            y: position.y,
            opacity: position.opacity
          }}
          animate={{
            x: [position.x, Math.random() * 500, position.x],
            y: [position.y, Math.random() * 300, position.y],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
