import Image from "next/image"
import { ExternalLink, Github, Star } from "lucide-react"

export default function ModernProjects() {
  const projects = [
    {
      id: 1,
      name: "MyEconomy",
      subtitle: "Tu Compañero de Finanzas Personales",
      imageUrl: "/images/MyEconomy.png",
      description:
        "Una app de escritorio desarrollada con Python y Tkinter para organizar tus finanzas de manera sencilla y visual.",
      features: [
        "Registro de ingresos y gastos",
        "Control de tarjetas de crédito",
        "Gráficos financieros",
        "Informes mensuales",
        "Interfaz personalizable",
      ],
      motivation:
        "Quise crear una herramienta fácil de usar que reemplazara el Excel y ayudara a las personas a entender mejor su economía diaria.",
      tech: ["Python", "Tkinter", "SQLite"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 2,
      name: "BeautyCraf",
      subtitle: "Belleza a tu Medida",
      imageUrl: "/images/Beautycraf.png",
      description:
        "Un emprendimiento que ofrece experiencias de belleza personalizadas, centradas en los gustos, necesidades y características únicas de cada cliente.",
      features: [
        "Consultas personalizadas",
        "Tratamientos faciales",
        "Asesoramiento de imagen",
        "Productos de alta calidad",
        "Profesionales expertos",
      ],
      motivation:
        "Nuestro enfoque es completamente individual. Cada servicio se adapta al cliente, ayudando a realzar la belleza natural de cada persona.",
      tech: ["Branding", "UX/UI", "Marketing"],
      gradient: "from-pink-500/20 to-rose-500/20",
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-black to-neutral-900/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-beige via-white to-beige bg-clip-text text-transparent mb-6">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-beige/60 max-w-2xl mx-auto">
              Creaciones que reflejan mi pasión por la tecnología y el diseño
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group">
                    {/* Background Glow */}
                    <div
                      className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Main Container */}
                    <div className="relative bg-gradient-to-br from-neutral-900/80 to-black/80 rounded-3xl p-8 backdrop-blur-xl border border-beige/10 group-hover:border-beige/30 transition-all duration-500">
                      {/* Logo */}
                      <div className="relative w-48 h-48 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-contain"
                          sizes="200px"
                        />
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-beige/10 text-beige/80 rounded-full text-sm border border-beige/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black text-beige mb-2">{project.name}</h3>
                    <p className="text-xl text-beige/60 mb-6">{project.subtitle}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-beige mb-3 flex items-center">
                        <Star className="w-5 h-5 mr-2" />
                        ¿Qué es?
                      </h4>
                      <p className="text-beige/80 leading-relaxed text-lg">{project.description}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-beige mb-3">Características principales:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-beige/80 group/item hover:text-beige transition-colors duration-300"
                          >
                            <div className="w-2 h-2 bg-beige rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-beige/5 to-white/5 rounded-2xl p-6 border border-beige/10">
                      <h4 className="text-lg font-bold text-beige mb-3">💡 Motivación</h4>
                      <p className="text-beige/80 leading-relaxed italic">{project.motivation}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <button className="flex items-center px-6 py-3 bg-gradient-to-r from-beige to-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver proyecto
                      </button>
                      <button className="flex items-center px-6 py-3 border border-beige/30 text-beige rounded-full hover:bg-beige/10 transition-colors duration-300">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
