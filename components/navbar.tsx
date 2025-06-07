"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-neutral-900 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-beige text-xl font-bold">Mi Sitio</div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-beige focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#biografia" className="text-beige hover:text-beige/80 transition-colors">
              Biografía
            </a>
            <a href="#hobbies" className="text-beige hover:text-beige/80 transition-colors">
              Mis Hobbies
            </a>
            <a href="#proyectos" className="text-beige hover:text-beige/80 transition-colors">
              Proyectos
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <a
              href="#biografia"
              className="block text-beige hover:text-beige/80 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Biografía
            </a>
            <a
              href="#hobbies"
              className="block text-beige hover:text-beige/80 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Mis Hobbies
            </a>
            <a
              href="#proyectos"
              className="block text-beige hover:text-beige/80 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
