"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Sparkles, Heart, Code } from "lucide-react"

export default function ColorfulHero() {
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
      {/* Colorful Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-900/10 via-transparent to-orange-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.3),transparent_50%)]" />

        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Floating Colorful Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rotate-45 animate-spin-slow rounded-2xl" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full animate-float-slow" />
        <div className="absolute bottom-32 left-40 w-16 h-16 bg-gradient-to-r from-green-500/25 to-emerald-500/25 rotate-12 animate-pulse-slow rounded-lg" />
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full animate-bounce-gentle" />

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 animate-float-slow">
          <Sparkles className="w-8 h-8 text-pink-400/60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-slow delay-1000">
          <Heart className="w-6 h-6 text-red-400/60" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-slow delay-2000">
          <Code className="w-7 h-7 text-blue-400/60" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8 overflow-hidden">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x mb-4">
            MELISSA
          </h1>
          <div className="h-2 w-40 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 mx-auto rounded-full animate-pulse-slow" />
        </div>

        <div className="space-y-6 mb-12">
          <p className="text-2xl md:text-3xl bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold animate-fade-in-up delay-300">
            ✨ Ingeniera de Sistemas • Desarrolladora • Soñadora ✨
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-500">
            🚀 Transformando ideas en código, explorando el mundo en dos ruedas y creando experiencias digitales únicas
            🌈
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-700">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Conoce mi historia
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="group px-8 py-4 border-2 border-purple-400/50 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-white font-semibold rounded-full transition-all duration-300 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:scale-110">
            <span className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              Ver proyectos
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">✨</span>
            </span>
          </button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-4 border border-pink-300/20 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              21
            </div>
            <div className="text-white/70 text-sm">Años ✨</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-4 border border-blue-300/20 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              4°
            </div>
            <div className="text-white/70 text-sm">Semestre 🎓</div>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-4 border border-green-300/20 hover:scale-105 transition-transform duration-300">
            <div className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Python
            </div>
            <div className="text-white/70 text-sm">Favorito 💻</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-xl rounded-2xl p-4 border border-orange-300/20 hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold">🏍️</div>
            <div className="text-white/70 text-sm">Aventuras 🌟</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  )
}
