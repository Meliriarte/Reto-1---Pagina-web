import Image from "next/image"
import { Play, MapPin, Gamepad2 } from "lucide-react"

export default function ModernHobbies() {
  const hobbies = [
    {
      id: 1,
      title: "Ver películas",
      imageUrl: "/images/ver_peliculas.png",
      icon: Play,
      description:
        "Ver películas es una de las formas favoritas de Melissa para desconectarse. Le encanta crear un ambiente cómodo y sumergirse en historias que la hacen reír, llorar o reflexionar.",
      fact: "La primera película con sonido fue El cantante de jazz, estrenada en 1927.",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 2,
      title: "Viajar",
      imageUrl: "/images/viajar.png",
      icon: MapPin,
      description:
        "Viajar en moto es más que un pasatiempo: es libertad. Melissa siente emoción al recorrer carreteras, descubrir nuevos lugares y vivir aventuras con su mejor amigo.",
      fact: "Colombia tiene más de 1.100 municipios, y muchos de ellos son ideales para recorrer en moto.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 3,
      title: "Jugar videojuegos",
      imageUrl: "/images/jugar.png",
      icon: Gamepad2,
      description:
        "Jugar videojuegos es una forma divertida y desafiante para Melissa. Le gustan los juegos que estimulan su mente, la entretienen y le permiten escapar de la rutina.",
      fact: "El videojuego más vendido de todos los tiempos es Minecraft, con más de 300 millones de copias.",
      color: "from-green-500/20 to-emerald-500/20",
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900/50 to-black" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-beige via-white to-beige bg-clip-text text-transparent mb-6">
              Mis Pasiones
            </h2>
            <p className="text-xl text-beige/60 max-w-2xl mx-auto">
              Las actividades que dan color y emoción a mi vida diaria
            </p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon
              return (
                <div key={hobby.id} className="group relative" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Main Card */}
                  <div className="relative h-[500px] bg-gradient-to-br from-neutral-900/80 to-black/80 rounded-3xl overflow-hidden backdrop-blur-xl border border-beige/10 transition-all duration-500 hover:scale-105 hover:border-beige/30">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={hobby.imageUrl || "/placeholder.svg"}
                        alt={hobby.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Icon */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center border border-beige/20 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-beige" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 relative z-10">
                      <h3 className="text-2xl font-bold text-beige mb-4 group-hover:text-white transition-colors duration-300">
                        {hobby.title}
                      </h3>

                      <p className="text-beige/80 leading-relaxed mb-6 group-hover:text-beige/90 transition-colors duration-300">
                        {hobby.description}
                      </p>

                      {/* Fact Box */}
                      <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-4 border border-beige/10 group-hover:border-beige/20 transition-colors duration-300">
                        <div className="text-sm font-semibold text-beige mb-2">💡 Dato curioso:</div>
                        <p className="text-beige/70 text-sm italic group-hover:text-beige/80 transition-colors duration-300">
                          {hobby.fact}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
