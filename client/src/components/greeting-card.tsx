import { motion } from "framer-motion";

interface Pattern {
  id: string;
  component: React.ReactNode;
}

interface GreetingCardProps {
  name: string;
  selectedPattern?: string;
}

const patterns = {
  geometric: (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="geometric" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M20 0L40 20L20 40L0 20Z" fill="#0D4C3E"/>
          <circle cx="20" cy="20" r="5" fill="#C19B6C"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#geometric)"/>
      </svg>
    </div>
  ),
  arabesque: (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="arabesque" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30 0C13.4 0 0 13.4 0 30c0 16.6 13.4 30 30 30s30-13.4 30-30c0-16.6-13.4-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" fill="#0D4C3E"/>
          <path d="M30 15c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z" fill="#C19B6C"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#arabesque)"/>
      </svg>
    </div>
  ),
  stars: (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="stars" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M25 0l6.5 20H50L35 32.4l5.7 17.6L25 40l-15.7 10 5.7-17.6L0 20h18.5z" fill="#0D4C3E"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#stars)"/>
      </svg>
    </div>
  ),
  mosque: (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="mosque" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="#0D4C3E" strokeWidth="2"/>
          <path d="M50 10 Q80 50 50 90 Q20 50 50 10" fill="#C19B6C" opacity="0.5"/>
          <circle cx="50" cy="50" r="5" fill="#0D4C3E"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#mosque)"/>
      </svg>
    </div>
  ),
  lanterns: (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="lanterns" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M40 10 L60 30 L40 70 L20 30 Z" fill="#C19B6C"/>
          <path d="M40 20 L50 30 L40 60 L30 30 Z" fill="#0D4C3E"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#lanterns)"/>
      </svg>
    </div>
  )
};

export function GreetingCard({ name, selectedPattern = 'geometric' }: GreetingCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative p-8 rounded-lg border-4 border-[#C19B6C] bg-white overflow-hidden"
    >
      {patterns[selectedPattern as keyof typeof patterns]}

      {/* Decorative corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#0D4C3E] rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#0D4C3E] rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#0D4C3E] rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#0D4C3E] rounded-br-lg" />
      </div>

      {/* Crescent moon decoration */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <svg width="50" height="50" viewBox="0 0 100 100" className="text-[#C19B6C]">
          <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 80c-16.6 0-30-13.4-30-30s13.4-30 30-30 30 13.4 30 30-13.4 30-30 30z" fill="currentColor"/>
        </svg>
      </div>

      <div className="text-center space-y-6 relative z-10 mt-4">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-[#8C5E2A] font-noto"
        >
          {name}
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-playfair text-[#0D4C3E]"
        >
          Ramadan Mubarak
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[#2C3E50] font-noto"
        >
          May this holy month bring you peace, prosperity and happiness
        </motion.p>

        {/* Islamic ornamental divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8 }}
          className="h-1 bg-[#C19B6C] mx-auto w-32 rounded-full"
        />
      </div>
    </motion.div>
  );
}