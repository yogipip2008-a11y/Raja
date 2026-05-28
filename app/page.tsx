"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden min-h-screen">

      <section className="relative h-screen flex flex-col justify-center items-center">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-cyan-950" />

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-9xl font-black text-center z-10 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
        >
          ST. JOSEPH'S
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-2xl text-slate-300 z-10"
        >
          Excellence • Discipline • Innovation
        </motion.p>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5 }}
  className="flex gap-6 mt-10 z-10"
>

  <Link href="/admissions">
    <button className="bg-cyan-500 px-8 py-4 rounded-2xl hover:scale-110 transition">
      Apply Now
    </button>
  </Link>

  <Link href="/virtual-tour">
    <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition">
      Virtual Tour
    </button>
  </Link>

</motion.div>

      </section>

    </main>
  )
}