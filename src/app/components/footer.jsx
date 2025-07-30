"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-sky-800 text-white py-16 rounded-t-3xl mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex md:grid-cols-4 gap-8 mb-12">
          <div>
          <span className="text-xl font-semibold text-white">
             <span className="text-sky-800 bg-white py-1">OO</span>rugo
          </span>
          </div>

          <div>
            <ul className="space-y-2 text-gray-400 flex md:grid-cols-4">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="hover:text-white transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          

          
        </div>

        
      </div>
    </footer>
  )
}

