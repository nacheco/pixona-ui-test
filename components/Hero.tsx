"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import lottie from 'lottie-web';

const Hero: React.FC = () => {
  const lottieContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieContainer.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/630451e2-ea74-486d-8d80-b0f13236d950/u06SpRgUmv.json'
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 text-center relative z-10 text-default">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-transparent bg-clip-text bg-heading-gradient text-[28px] sm:text-[28px] md:text-[42px] lg:text-[48px] xl:text-[62px] font-semibold leading-[1.1] mb-4 text-center tracking-tighter"
      >
       The Best AI Agent and Recruiting
       <br />
        Platform Ever Created
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-slate-500 text-[13px] md:text-lg mt-4 sm:mt-6 font-light text-center tracking-tight px-4 sm:px-0"
      >
Pixona's AI Agent and AI Labor Platform are revolutionizing recruiting by
<br />
saving you millions of dollars, countless hours, and delivering superior talent results.
      </motion.p>

      {/* Button to Professor Page */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 flex justify-center"
      >
       <Link href="#" className="text-sm bg-button-gradient px-4 py-2 rounded hover:bg-button-gradient/90 transition-colors">
          Get Started
        </Link>
      </motion.div>

      {/* Hero Lottie Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-12 sm:mt-20 p-2 bg-transparent"
        style={{
          boxShadow: "0 0 50px 2px rgba(255, 255, 255, 0.6)",
        }}
      >
        <div ref={lottieContainer} className="rounded-2xl relative z-10 w-full h-auto"></div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-charcoal-black text-base sm:text-lg mt-6"
      >
        Leveraging AI-powered transcript analysis to transform sales calls into
        actionable insights, enhancing your team&apos;s performance and strategy.
      </motion.p>
    </main>
  );
};

export default Hero;