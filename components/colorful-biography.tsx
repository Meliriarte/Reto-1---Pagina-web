import { User, Code, Heart, Star, Sparkles, Coffee } from "lucide-react"

export default function ColorfulBiography() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-green-900/10 via-transparent to-orange-900/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-gradient-x">
              ✨ Mi Historia ✨
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto rounded-full animate-pulse-slow" />
            <p className="text-xl text-white/70 mt-6 max-w-2xl mx-auto">
              🌟 Una joven apasionada por la tecnología y los sueños grandes 🌟
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/25">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      Sobre Mí
                    </h3>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-white/60 text-sm">Soñadora desde pequeña</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 border border-pink-300/20 hover:border-pink-300/40 transition-all duration-300">
                  <p className="text-white/90 leading-relaxed text-lg">
                    Melissa, una joven de 21 años, estudia Ingeniería de Sistemas en modalidad por ciclos propedéuticos
                    y ya cursa el cuarto semestre. Desde pequeña soñaba con esta carrera, y ahora que la vive, se
                    esfuerza por crecer cada día. 🌱
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Pasión por la Tecnología
                    </h3>
                    <div className="flex items-center mt-1">
                      <Sparkles className="w-4 h-4 text-blue-400 mr-1" />
                      <span className="text-white/60 text-sm">Python es mi favorito</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-300/20 hover:border-blue-300/40 transition-all duration-300">
                  <p className="text-white/90 leading-relaxed text-lg">
                    Amante de la tecnología, le gusta programar, especialmente en Python. En su tiempo libre, le encanta
                    viajar en moto con su mejor amigo para descubrir pueblos, playas y paisajes de Colombia. 🏍️✨
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      Sueños y Metas
                    </h3>
                    <div className="flex items-center mt-1">
                      <Coffee className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-white/60 text-sm">Lasaña y música relajante</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl p-6 border border-green-300/20 hover:border-green-300/40 transition-all duration-300">
                  <p className="text-white/90 leading-relaxed text-lg">
                    Su sueño es tener su casa propia, formar una familia y cumplirle las promesas a su abuela. La lasaña
                    es su plato favorito y la música relajante su refugio cuando necesita paz. 🏠💕
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              <div className="relative group">
                {/* Main Visual Container */}
                <div className="relative w-full h-[500px] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl overflow-hidden backdrop-blur-xl border border-purple-300/20 group-hover:border-purple-300/40 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />

                  {/* Profile Image Placeholder */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-4xl shadow-2xl shadow-purple-500/50 group-hover:scale-110 transition-transform duration-500">
                    👩‍💻
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-20 left-8 bg-gradient-to-r from-pink-500/80 to-purple-500/80 backdrop-blur-xl rounded-2xl p-3 border border-pink-300/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold text-white">21</div>
                    <div className="text-white/80 text-xs">Años ✨</div>
                  </div>

                  <div className="absolute top-20 right-8 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 backdrop-blur-xl rounded-2xl p-3 border border-blue-300/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold text-white">4°</div>
                    <div className="text-white/80 text-xs">Semestre 🎓</div>
                  </div>

                  <div className="absolute bottom-20 left-8 bg-gradient-to-r from-green-500/80 to-emerald-500/80 backdrop-blur-xl rounded-2xl p-3 border border-green-300/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-xl font-bold text-white">Python</div>
                    <div className="text-white/80 text-xs">Favorito 💻</div>
                  </div>

                  <div className="absolute bottom-20 right-8 bg-gradient-to-r from-orange-500/80 to-yellow-500/80 backdrop-blur-xl rounded-2xl p-3 border border-orange-300/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl">🏍️</div>
                    <div className="text-white/80 text-xs">Aventuras 🌟</div>
                  </div>

                  {/* Central Decorative Element */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-float-slow"></div>
                <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float-slow delay-1000"></div>
                <div className="absolute -bottom-4 -left-2 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-float-slow delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
