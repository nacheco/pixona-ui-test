"use client"
import Hero from "@/components/Hero"
import Partners from "@/components/Partners"
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
      >
        <Partners />
      </motion.div>
    </>
  )
}

export default page