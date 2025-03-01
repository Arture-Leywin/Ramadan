import { motion } from "framer-motion";

export function PatternOverlay() {
  return (
    <>
      {/* Background geometric pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487266659293-c4762f375955')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Animated decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-48 h-48 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1514747348279-46eb4082b804')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(-45deg)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1640184713829-27ed2beda5f6')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(45deg)',
        }}
      />
    </>
  );
}
