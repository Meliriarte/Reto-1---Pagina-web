import ScrollReveal from "@/components/scroll-reveal"
import InteractiveCard from "@/components/interactive-card"

export default function Biography() {
  return (
    <div className="max-w-3xl mx-auto">
      <ScrollReveal direction="down">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-beige animate-pulse-slow">Biografía</h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={200}>
        <InteractiveCard hoverScale={true} glowEffect={true}>
          <div className="bg-neutral-900 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-beige/10 transition-all duration-500">
            <div className="prose prose-invert max-w-none">
              <p className="text-beige mb-4 hover:text-beige/90 transition-colors duration-300">
                Melissa, una joven de 21 años, estudia Ingeniería de Sistemas en modalidad por ciclos propedéuticos y ya
                cursa el cuarto semestre. Desde pequeña soñaba con esta carrera, y ahora que la vive, se esfuerza por
                crecer cada día. Amante de la tecnología, le gusta programar, especialmente en Python.
              </p>
              <p className="text-beige mb-4 hover:text-beige/90 transition-colors duration-300">
                En su tiempo libre, le encanta viajar en moto con su mejor amigo para descubrir pueblos, playas y
                paisajes de Colombia. También disfruta ver películas y jugar videojuegos para relajarse. Aunque es
                perfeccionista y un poco temperamental, está trabajando en mejorar su carácter.
              </p>
              <p className="text-beige hover:text-beige/90 transition-colors duration-300">
                Su sueño es tener su casa propia, formar una familia y cumplirle las promesas a su abuela. La lasaña es
                su plato favorito y la música relajante su refugio cuando necesita paz. Siempre busca aprender, crecer y
                disfrutar lo que ama.
              </p>
            </div>
          </div>
        </InteractiveCard>
      </ScrollReveal>
    </div>
  )
}
