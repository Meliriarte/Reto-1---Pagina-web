import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import InteractiveCard from "@/components/interactive-card"

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "MyEconomy – Tu Compañero de Finanzas Personales",
      imageUrl: "/images/MyEconomy.png",
      description:
        "Una app de escritorio desarrollada con Python y Tkinter para organizar tus finanzas de manera sencilla y visual.",
      details: [
        "Permite registrar ingresos y gastos",
        "Controla tus tarjetas de crédito y fechas de corte",
        "Muestra tu situación financiera con gráficos",
        "Genera informes mensuales",
        "Tiene una interfaz bonita y personalizable",
      ],
      motivation:
        "Quise crear una herramienta fácil de usar que reemplazara el Excel y ayudara a las personas a entender mejor su economía diaria. Con MyEconomy puedes tomar decisiones más conscientes sobre tu dinero.",
    },
    {
      id: 2,
      name: "BeautyCraf – Belleza a tu Medida",
      imageUrl: "/images/Beautycraf.png",
      description:
        "Un emprendimiento que ofrece experiencias de belleza personalizadas, centradas en los gustos, necesidades y características únicas de cada cliente.",
      details: [
        "Consultas personalizadas de belleza",
        "Tratamientos faciales, maquillaje, peinados y cuidado del cabello",
        "Asesoramiento de imagen para descubrir tu estilo",
        "Productos de alta calidad y técnicas modernas",
        "Profesionales expertos en tendencias y cuidado personal",
      ],
      motivation:
        "Nuestro enfoque es completamente individual. Cada servicio se adapta al cliente, y ofrecemos soluciones completas desde lo estético hasta lo práctico, ayudando a realzar la belleza natural de cada persona.",
    },
  ]

  return (
    <div>
      <ScrollReveal direction="down">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-beige animate-pulse-slow">
          Proyectos Destacados
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} direction={index % 2 === 0 ? "left" : "right"} delay={index * 300}>
            <InteractiveCard hoverScale={true} glowEffect={true}>
              <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-beige/20 group">
                <div className="p-8 flex flex-col items-center">
                  <div className="relative h-48 w-48 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-center text-beige mb-4 group-hover:text-beige/90 transition-colors duration-300">
                    {project.name}
                  </h3>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-beige mb-2">¿Qué es?</h4>
                    <p className="text-beige/90 group-hover:text-beige transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-6 w-full">
                    <h4 className="text-lg font-medium text-beige mb-2">
                      ¿Qué {project.id === 1 ? "hace" : "ofrece"}?
                    </h4>
                    <ul className="list-disc pl-5 text-beige/90 space-y-1">
                      {project.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="hover:text-beige transition-colors duration-300 hover:translate-x-1 transform transition-transform"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full">
                    <h4 className="text-lg font-medium text-beige mb-2">
                      ¿{project.id === 1 ? "Por qué la hice" : "Qué lo hace único"}?
                    </h4>
                    <p className="text-beige/90 group-hover:text-beige transition-colors duration-300">
                      {project.motivation}
                    </p>
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
