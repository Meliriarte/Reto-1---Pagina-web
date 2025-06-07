"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,224,208,0.1),transparent_50%)]" />
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-beige/20 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-beige/20 rotate-45 animate-spin-slow" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-beige/10 rounded-full animate-float-slow" />
        <div className="absolute bottom-32 left-40 w-16 h-16 bg-gradient-to-r from-beige/20 to-transparent rotate-12 animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-beige/30 rounded-full animate-bounce-gentle" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8 overflow-hidden">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-beige via-white to-beige bg-clip-text text-transparent animate-gradient-x mb-4">
            MELISSA
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-beige to-transparent mx-auto animate-pulse-slow" />
        </div>

        <div className="space-y-4 mb-12">
          <p className="text-xl md:text-2xl text-beige/80 font-light tracking-wide animate-fade-in-up delay-300">
            Ingeniera de Sistemas • Desarrolladora • Soñadora
          </p>
          <p className="text-lg text-beige/60 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-500">
            Transformando ideas en código, explorando el mundo en dos ruedas y creando experiencias digitales únicas
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-700">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-beige to-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-beige/25">
            <span className="relative z-10">Conoce mi historia</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-beige opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="group px-8 py-4 border-2 border-beige/50 text-beige font-semibold rounded-full transition-all duration-300 hover:border-beige hover:bg-beige/10 hover:scale-105">
            Ver proyectos
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-8 h-8 text-beige/60" />
      </div>
    </section>
  )
}
