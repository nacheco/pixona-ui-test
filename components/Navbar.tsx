"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <header className="container mx-auto mt-5 px-6 py-8 flex items-center justify-between relative z-10">
      <motion.div
        className="text-charcoal-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.svg" alt="Logo" width={90} height={26} />
        </Link>
      </motion.div>
      <motion.nav 
        className="flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
          }
        }}
      >
        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</Link>
        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Use Cases</Link>
        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
      </motion.nav>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.5
          }
        }}
      >
        <Link href="#" className="text-sm bg-button-gradient px-4 py-2 rounded hover:bg-button-gradient/90 transition-colors">
          Get Started
        </Link>
      </motion.div>
    </header>
  );
};

export default Navbar;