import Image from "next/image"
import { Play, MapPin, Gamepad2, Heart, Star, Zap } from "lucide-react"

export default function ColorfulHobbies() {
  const hobbies = [
    {
      id: 1,
      title: "Ver películas",
      imageUrl: "/images/ver_peliculas.png",
      icon: Play,
      description:
        "Ver películas es una de las formas favoritas de Melissa para desconectarse. Le encanta crear un ambiente cómodo y sumergirse en historias que la hacen reír, llorar o reflexionar.",
      fact: "La primera película con sonido fue El cantante de jazz, estrenada en 1927.",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      bgGradient: "from-purple-500/20 via-pink-500/20 to-red-500/20",
      emoji: "🎬",
      decorativeIcon: Heart,
    },
    {
      id: 2,
      title: "Viajar",
      imageUrl: "/images/viajar.png",
      icon: MapPin,
      description:
        "Viajar en moto es más que un pasatiempo: es libertad. Melissa siente emoción al recorrer carreteras, descubrir nuevos lugares y vivir aventuras con su mejor amigo.",
      fact: "Colombia tiene más de 1.100 municipios, y muchos de ellos son ideales para recorrer en moto.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      emoji: "🏍️",
      decorativeIcon: Star,
    },
    {
      id: 3,
      title: "Jugar videojuegos",
      imageUrl: "/images/jugar.png",
      icon: Gamepad2,
      description:
        "Jugar videojuegos es una forma divertida y desafiante para Melissa. Le gustan los juegos que estimulan su mente, la entretienen y le permiten escapar de la rutina.",
      fact: "El videojuego más vendido de todos los tiempos es Minecraft, con más de 300 millones de copias.",
      gradient: "from-green-500 via-emerald-500 to-lime-500",
      bgGradient: "from-green-500/20 via-emerald-500/20 to-lime-500/20",
      emoji: "🎮",
      decorativeIcon: Zap,
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-pink-900/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-green-900/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-gradient-x">
              🌈 Mis Pasiones 🌈
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full animate-pulse-slow" />
            <p className="text-xl text-white/70 max-w-2xl mx-auto mt-6">
              ✨ Las actividades que dan color y emoción a mi vida diaria ✨
            </p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon
              const DecorativeIcon = hobby.decorativeIcon
              return (
                <div key={hobby.id} className="group relative" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${hobby.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  {/* Main Card */}
                  <div
                    className={`relative h-[550px] bg-gradient-to-br ${hobby.bgGradient} backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 transition-all duration-500 hover:scale-105 hover:border-white/40 group`}
                  >
                    {/* Decorative Elements */}
                    <div className="absolute top-4 left-4 text-3xl animate-bounce-slow">{hobby.emoji}</div>
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <DecorativeIcon className="w-8 h-8 text-white" />
                    </div>

                    {/* Image Container */}
                    <div className="relative h-52 overflow-hidden rounded-t-3xl">
                      <Image
                        src={hobby.imageUrl || "/placeholder.svg"}
                        alt={hobby.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`}
                      />

                      {/* Floating Icon */}
                      <div
                        className={`absolute bottom-4 right-4 w-14 h-14 bg-gradient-to-r ${hobby.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 relative z-10">
                      <h3
                        className={`text-2xl font-bold bg-gradient-to-r ${hobby.gradient} bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300`}
                      >
                        {hobby.title}
                      </h3>

                      <p className="text-white/90 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                        {hobby.description}
                      </p>

                      {/* Fact Box */}
                      <div
                        className={`bg-gradient-to-r ${hobby.bgGradient} backdrop-blur-xl rounded-2xl p-4 border border-white/10 group-hover:border-white/30 transition-all duration-300 hover:scale-105`}
                      >
                        <div className="flex items-center mb-2">
                          <span className="text-lg mr-2">💡</span>
                          <span className="text-sm font-semibold text-white">Dato curioso:</span>
                        </div>
                        <p className="text-white/80 text-sm italic group-hover:text-white transition-colors duration-300">
                          {hobby.fact}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Decorative Line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${hobby.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Decorative Elements */}
          <div className="flex justify-center mt-16 space-x-4">
            <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
