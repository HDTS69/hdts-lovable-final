import { motion } from "framer-motion";

export const LoadingSpinner = () => {
  return (
    <div 
      className="min-h-[60vh] flex flex-col items-center justify-center"
      style={{ 
        minHeight: 'inherit',
        contain: 'layout style paint',
      }}
    >
      <motion.div
        className="h-16 w-16 border-4 border-teal-200 border-t-teal-700 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotate: 360 
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 },
          rotate: {
            duration: 1,
            repeat: Infinity,
            ease: "linear",
            delay: 0
          }
        }}
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden'
        }}
      />
      <p 
        className="mt-4 text-gray-600"
        style={{
          contain: 'content',
        }}
      >
        Loading...
      </p>
    </div>
  );
}; 