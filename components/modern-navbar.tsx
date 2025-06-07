"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function ModernNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#biografia", label: "Biografía" },
    { href: "#hobbies", label: "Hobbies" },
    { href: "#proyectos", label: "Proyectos" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-beige/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-beige to-white bg-clip-text text-transparent">
            M.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-beige/80 hover:text-beige transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-beige to-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-beige/20 to-white/20 border border-beige/30 text-beige rounded-full hover:bg-beige/10 transition-all duration-300 hover:scale-105">
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-beige p-2 hover:bg-beige/10 rounded-lg transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-black/90 backdrop-blur-xl rounded-lg border border-beige/10 animate-fade-in">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-beige/80 hover:text-beige transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
