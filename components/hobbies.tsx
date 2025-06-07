import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import InteractiveCard from "@/components/interactive-card"

export default function Hobbies() {
  const hobbies = [
    {
      id: 1,
      title: "Ver películas",
      imageUrl: "/images/ver_peliculas.png",
    },
    {
      id: 2,
      title: "Viajar",
      imageUrl: "/images/viajar.png",
    },
    {
      id: 3,
      title: "Jugar videojuegos",
      imageUrl: "/images/jugar.png",
    },
  ]

  return (
    <div>
      <ScrollReveal direction="down">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-beige animate-pulse-slow">Mis Hobbies</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hobbies.map((hobby, index) => (
          <ScrollReveal key={hobby.id} direction="up" delay={index * 200}>
            <InteractiveCard hoverScale={true} glowEffect={true}>
              <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-beige/20 group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={hobby.imageUrl || "/placeholder.svg"}
                    alt={hobby.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-beige group-hover:text-beige/90 transition-colors duration-300">
                    {hobby.title}
                  </h3>
                  <div className="mb-4">
                    {hobby.id === 1 && (
                      <p className="text-beige group-hover:text-beige/90 transition-colors duration-300">
                        Ver películas es una de las formas favoritas de Melissa para desconectarse. Le encanta crear un
                        ambiente cómodo y sumergirse en historias que la hacen reír, llorar o reflexionar. Cada película
                        le permite vivir muchas vidas desde la tranquilidad de su sofá.
                      </p>
                    )}
                    {hobby.id === 2 && (
                      <p className="text-beige group-hover:text-beige/90 transition-colors duration-300">
                        Viajar en moto es más que un pasatiempo: es libertad. Melissa siente emoción al recorrer
                        carreteras, descubrir nuevos lugares y vivir aventuras con su mejor amigo. Cada viaje le da una
                        historia para contar y un paisaje para recordar.
                      </p>
                    )}
                    {hobby.id === 3 && (
                      <p className="text-beige group-hover:text-beige/90 transition-colors duration-300">
                        Jugar videojuegos es una forma divertida y desafiante para Melissa. Le gustan los juegos que
                        estimulan su mente, la entretienen y le permiten escapar de la rutina. Para ella, cada partida
                        es una mezcla de emoción, estrategia y aprendizaje.
                      </p>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-beige/20 group-hover:border-beige/40 transition-colors duration-300">
                    <p className="text-sm font-medium text-beige">Dato curioso:</p>
                    {hobby.id === 1 && (
                      <p className="text-beige/90 italic group-hover:text-beige transition-colors duration-300">
                        La primera película con sonido fue <em>El cantante de jazz</em>, estrenada en 1927.
                      </p>
                    )}
                    {hobby.id === 2 && (
                      <p className="text-beige/90 italic group-hover:text-beige transition-colors duration-300">
                        Colombia tiene más de 1.100 municipios, y muchos de ellos son ideales para recorrer en moto.
                      </p>
                    )}
                    {hobby.id === 3 && (
                      <p className="text-beige/90 italic group-hover:text-beige transition-colors duration-300">
                        El videojuego más vendido de todos los tiempos es <em>Minecraft</em>, con más de 300 millones de
                        copias.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </InteractiveCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
