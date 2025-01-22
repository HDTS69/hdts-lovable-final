import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { PlumbingService } from './services/PlumbingService';
import { GasFittingService } from './services/GasFittingService';
import { RoofingService } from './services/RoofingService';
import { AirConditioningService } from './services/AirConditioningService';

interface AnimatedServiceIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

export const AnimatedServiceIcon = forwardRef<any, AnimatedServiceIconProps>(({ icon, title, description, path }, ref) => {
  const isPlumbing = title === "Plumbing";
  const isGasFitting = title === "Gas Fitting";
  const isRoofing = title === "Roof Repairs";
  const isAirCon = title === "Air Conditioning";

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg border-[0.25px] border-teal-500 bg-white p-1 md:p-1.5 flex flex-col items-center text-center space-y-0.5"
    >
      <Link to={path} className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 1 }}
          animate={isPlumbing || isGasFitting || isRoofing || isAirCon ? { scale: [1, 1.1, 1] } : { scale: [1, 1.05, 1] }}
          transition={{
            duration: isPlumbing || isGasFitting || isRoofing || isAirCon ? 1.5 : 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-teal-500"
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-bold hover:text-teal-600 transition-colors">{title}</h3>
      </Link>
      <p className="text-sm text-zinc-600">{description}</p>
      {isPlumbing && <PlumbingService ref={ref} />}
      {isGasFitting && <GasFittingService ref={ref} />}
      {isRoofing && <RoofingService ref={ref} />}
      {isAirCon && <AirConditioningService ref={ref} />}
    </motion.div>
  );
});

AnimatedServiceIcon.displayName = 'AnimatedServiceIcon';