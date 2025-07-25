'use client'
import Header from './components/header'
import { Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
const page = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header/> 
       <main className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           Find <span className='text-yellow-500'>Rooms</span> Fast. No Agents, No Stress.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
           Verified rooms and apartments from trusted landlords — with videos, clear pricing, and no agent hassle.
            find your next home safely and easily.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="bg-sky-700 hover:bg-sky-600 text-white rounded-full px-8 py-3 text-lg font-medium">
              <Play className="w-5 h-5 mr-2" />
              Download app
            </Button>
          </motion.div>
        </div>
        </main>
    </div>
  )
}

export default page;
