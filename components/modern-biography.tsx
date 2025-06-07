import { User, Code, Heart } from "lucide-react"

export default function ModernBiography() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-beige/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-beige via-white to-beige bg-clip-text text-transparent mb-6">
              Mi Historia
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-beige to-transparent mx-auto" />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-beige/20 to-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <User className="w-6 h-6 text-beige" />
                  </div>
                  <h3 className="text-2xl font-bold text-beige">Sobre Mí</h3>
                </div>
                <p className="text-beige/80 leading-relaxed text-lg">
                  Melissa, una joven de 21 años, estudia Ingeniería de Sistemas en modalidad por ciclos propedéuticos y
                  ya cursa el cuarto semestre. Desde pequeña soñaba con esta carrera, y ahora que la vive, se esfuerza
                  por crecer cada día.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-beige/20 to-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-beige" />
                  </div>
                  <h3 className="text-2xl font-bold text-beige">Pasión por la Tecnología</h3>
                </div>
                <p className="text-beige/80 leading-relaxed text-lg">
                  Amante de la tecnología, le gusta programar, especialmente en Python. En su tiempo libre, le encanta
                  viajar en moto con su mejor amigo para descubrir pueblos, playas y paisajes de Colombia.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-beige/20 to-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-beige" />
                  </div>
                  <h3 className="text-2xl font-bold text-beige">Sueños y Metas</h3>
                </div>
                <p className="text-beige/80 leading-relaxed text-lg">
                  Su sueño es tener su casa propia, formar una familia y cumplirle las promesas a su abuela. La lasaña
                  es su plato favorito y la música relajante su refugio cuando necesita paz.
                </p>
              </div>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-beige/10 to-white/5 rounded-3xl overflow-hidden backdrop-blur-sm border border-beige/20">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />

                {/* Floating Stats */}
                <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-xl rounded-2xl p-4 border border-beige/20">
                  <div className="text-3xl font-bold text-beige">21</div>
                  <div className="text-beige/60 text-sm">Años</div>
                </div>

                <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-xl rounded-2xl p-4 border border-beige/20">
                  <div className="text-3xl font-bold text-beige">4°</div>
                  <div className="text-beige/60 text-sm">Semestre</div>
                </div>

                <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-xl rounded-2xl p-4 border border-beige/20">
                  <div className="text-2xl font-bold text-beige">Python</div>
                  <div className="text-beige/60 text-sm">Favorito</div>
                </div>

                <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-xl rounded-2xl p-4 border border-beige/20">
                  <div className="text-2xl font-bold text-beige">🏍️</div>
                  <div className="text-beige/60 text-sm">Aventuras</div>
                </div>

                {/* Central Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-beige/30 to-white/30 rounded-full flex items-center justify-center backdrop-blur-xl border border-beige/30">
                    <div className="text-4xl">💻</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
