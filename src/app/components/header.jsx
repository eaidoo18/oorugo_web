"use client"

import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
import { Play, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

 const Header =() => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems =[
    {
      link:'/benefits',
      text:'Benefits'
    },
     {
      link:'/feature',
      text:'Features'
    },
    {
      link:'/how-it-works',
      text:'How it works'
    }
  ]

  return (
    <motion.header
        className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm rounded-full m-5"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-sky-800"><span className="text-white bg-sky-800">OO</span>rugo</span>
        </div>


        <nav className="hidden md:flex items-center gap-8 ">
        {navItems.map((item,index)=>{
          return(
            <Link href={item.link} key={index}>{item.text}</Link>
          )
        })}
        </nav>

        

        {/* <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6">
          <Play className="w-4 h-4 mr-2" />
          Download app
        </Button> */}
      </motion.header>
  )
}
export default Header;