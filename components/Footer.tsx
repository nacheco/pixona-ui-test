"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="flex justify-center items-center"
      id="footer"
      initial={{ opacity: 0 }}
      whileInView={{  opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <img src="/images/footer.svg" alt="Hope you liked it" className="my-16" />
    </motion.footer>
  );
};

export default Footer;