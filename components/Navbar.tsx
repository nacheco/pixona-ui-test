"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <motion.div 
        className="lg:hidden"
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
        <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 transition-colors">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </motion.div>
      <motion.nav 
        className={`flex-col lg:flex-row lg:flex space-x-6 ${isOpen ? 'flex' : 'hidden'} lg:flex bg-white lg:bg-transparent p-6 lg:p-0 rounded-lg lg:rounded-none shadow-lg lg:shadow-none`}
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
        <Link href="#" className="text-sm bg-button-gradient px-4 py-2 rounded hover:bg-button-gradient/90 transition-colors mt-4 lg:mt-0">
          Get Started
        </Link>
      </motion.nav>
    </header>
  );
};

export default Navbar;