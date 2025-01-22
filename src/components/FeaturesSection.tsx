import React, { forwardRef } from 'react';
import { Clock, Shield, Award, DollarSign } from "lucide-react";
import { motion } from 'framer-motion';
import { AnimatedWrench, AnimatedFlame, AnimatedHome, AnimatedWind } from '@/components/animated-icons';
import { AnimatedServiceIcon } from '@/components/AnimatedServiceIcon';
import type { PlumbingServiceRef } from "@/components/services/PlumbingService";
import type { GasFittingServiceRef } from "@/components/services/GasFittingService";
import type { RoofingServiceRef } from "@/components/services/RoofingService";
import type { AirConditioningServiceRef } from "@/components/services/AirConditioningService";

interface FeaturesSectionProps {
  plumbingRef: React.RefObject<HTMLDivElement>;
  gasFittingRef: React.RefObject<HTMLDivElement>;
  roofingRef: React.RefObject<HTMLDivElement>;
  airConditioningRef: React.RefObject<HTMLDivElement>;
  plumbingServiceRef: React.RefObject<PlumbingServiceRef>;
  gasFittingServiceRef: React.RefObject<GasFittingServiceRef>;
  roofingServiceRef: React.RefObject<RoofingServiceRef>;
  airConditioningServiceRef: React.RefObject<AirConditioningServiceRef>;
}

export const FeaturesSection = ({
  plumbingRef,
  gasFittingRef,
  roofingRef,
  airConditioningRef,
  plumbingServiceRef,
  gasFittingServiceRef,
  roofingServiceRef,
  airConditioningServiceRef
}: FeaturesSectionProps) => {
  return (
    <>
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 sm:px-6">
          <div className="grid gap-6 md:gap-8 grid-cols-1">
            <div ref={plumbingRef} id="plumbing-services">
              <AnimatedServiceIcon
                icon={<AnimatedWrench className="h-8 w-8" />}
                title="Plumbing"
                description="Emergency repairs and installations"
                ref={plumbingServiceRef}
                path="/plumbing"
              />
            </div>
            <div ref={gasFittingRef} id="gas-fitting-services">
              <AnimatedServiceIcon
                icon={<AnimatedFlame className="h-8 w-8" />}
                title="Gas Fitting"
                description="Licensed services for home and business"
                ref={gasFittingServiceRef}
                path="/gas-fitting"
              />
            </div>
            <div ref={roofingRef} id="roofing-services">
              <AnimatedServiceIcon
                icon={<AnimatedHome className="h-8 w-8" />}
                title="Roof Repairs"
                description="Expert maintenance and repairs"
                ref={roofingServiceRef}
                path="/roofing"
              />
            </div>
            <div ref={airConditioningRef} id="air-conditioning-services">
              <AnimatedServiceIcon
                icon={<AnimatedWind className="h-8 w-8" />}
                title="Air Conditioning"
                description="Installation and servicing of AC systems"
                ref={airConditioningServiceRef}
                path="/air-conditioning"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-[100vh] sm:min-h-0 py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-3xl text-teal-700">
                Why Choose HD Trade Services?
              </h2>
              <p className="mx-auto max-w-[600px] text-zinc-500 text-sm md:text-base">
                We deliver excellence in every service, guaranteed.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-4 gap-8 mt-8">
              <motion.div 
                className="flex flex-col items-center space-y-3 p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Clock className="h-12 w-12 text-teal-500" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-bold">24/7 Service</h3>
                <p className="text-zinc-500 text-base">Emergency response any time, day or night</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center space-y-3 p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Shield className="h-12 w-12 text-teal-500" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-bold">Licensed & Insured</h3>
                <p className="text-zinc-500 text-base">Fully qualified professionals you can trust</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center space-y-3 p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Award className="h-12 w-12 text-teal-500" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-bold">Satisfaction Guaranteed</h3>
                <p className="text-zinc-500 text-base">We're not happy until you're happy</p>
              </motion.div>

              <motion.div 
                className="flex flex-col items-center space-y-3 p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <DollarSign className="h-12 w-12 text-teal-500" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-bold">Finance Options</h3>
                <p className="text-zinc-500 text-base">We offer convenient finance options, as well as Zip Pay, so you can pay in easy and flexible instalments</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
