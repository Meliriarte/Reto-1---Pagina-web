import Image from "next/image"
import { ExternalLink, Github, Star, Rocket, Palette, Code } from "lucide-react"

export default function ColorfulProjects() {
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
      gradient: "from-green-400 via-emerald-400 to-teal-400",
      bgGradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
      emoji: "💰",
      icon: Code,
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
      gradient: "from-pink-400 via-rose-400 to-purple-400",
      bgGradient: "from-pink-500/20 via-rose-500/20 to-purple-500/20",
      emoji: "💄",
      icon: Palette,
    },
  ]

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-fuchsia-900/20 to-cyan-900/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 via-transparent to-orange-900/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-gradient-x">
              🚀 Proyectos Destacados 🚀
            </h2>
            <div className="w-48 h-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 mx-auto rounded-full animate-pulse-slow" />
            <p className="text-xl text-white/70 max-w-2xl mx-auto mt-6">
              ✨ Creaciones que reflejan mi pasión por la tecnología y el diseño ✨
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-32">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div
                  key={project.id}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Project Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative group">
                      {/* Background Glow */}
                      <div
                        className={`absolute -inset-6 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                      />

                      {/* Main Container */}
                      <div
                        className={`relative bg-gradient-to-br ${project.bgGradient} backdrop-blur-xl rounded-3xl p-8 border border-white/20 group-hover:border-white/40 transition-all duration-500`}
                      >
                        {/* Decorative Elements */}
                        <div className="absolute top-4 left-4 text-3xl animate-bounce-slow">{project.emoji}</div>
                        <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        {/* Logo */}
                        <div className="relative w-56 h-56 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                          />
                          <Image
                            src={project.imageUrl || "/placeholder.svg"}
                            alt={project.name}
                            fill
                            className="object-contain relative z-10"
                            sizes="250px"
                          />
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-3 justify-center">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-300`}
                              style={{ animationDelay: `${techIndex * 100}ms` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div>
                      <h3
                        className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-3`}
                      >
                        {project.name}
                      </h3>
                      <p className="text-2xl text-white/70 mb-6">{project.subtitle}</p>
                    </div>

                    <div className="space-y-8">
                      <div
                        className={`bg-gradient-to-r ${project.bgGradient} backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300`}
                      >
                        <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                          <Star className="w-6 h-6 mr-3 text-yellow-400" />
                          ¿Qué es?
                        </h4>
                        <p className="text-white/90 leading-relaxed text-lg">{project.description}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                          <Rocket className="w-6 h-6 mr-3 text-blue-400" />
                          Características principales:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {project.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className={`flex items-center text-white/90 bg-gradient-to-r ${project.bgGradient} backdrop-blur-xl rounded-xl p-3 border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 group/item`}
                            >
                              <div
                                className={`w-3 h-3 bg-gradient-to-r ${project.gradient} rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300`}
                              />
                              <span className="group-hover/item:text-white transition-colors duration-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`bg-gradient-to-r ${project.bgGradient} backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300`}
                      >
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                          <span className="text-2xl mr-2">💡</span>
                          Motivación
                        </h4>
                        <p className="text-white/90 leading-relaxed italic">{project.motivation}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <button
                          className={`flex items-center px-8 py-4 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Ver proyecto ✨
                        </button>
                        <button className="flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300">
                          <Github className="w-5 h-5 mr-2" />
                          Código 💻
                        </button>
                      </div>
                    </div>
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
