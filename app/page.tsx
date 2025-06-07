import ModernNavbar from "@/components/modern-navbar"
import ColorfulHero from "@/components/colorful-hero"
import ColorfulBiography from "@/components/colorful-biography"
import ColorfulHobbies from "@/components/colorful-hobbies"
import ColorfulProjects from "@/components/colorful-projects"
import FloatingChatbot from "@/components/floating-chatbot"
import ColorfulBackground from "@/components/colorful-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ColorfulBackground />
      <ModernNavbar />

      <main className="relative z-10">
        <ColorfulHero />

        <section id="biografia">
          <ColorfulBiography />
        </section>

        <section id="hobbies">
          <ColorfulHobbies />
        </section>

        <section id="proyectos">
          <ColorfulProjects />
        </section>
      </main>

      <footer className="relative z-10 bg-gradient-to-t from-purple-900/50 via-pink-900/30 to-transparent py-12 text-center border-t border-white/10">
        <div className="container mx-auto px-6">
          <p className="text-white/70 mb-6 text-lg">
            ✨ &copy; {new Date().getFullYear()} Melissa - Diseñado con 💜 y mucho código 🌈 ✨
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="text-pink-400 hover:text-pink-300 transition-colors duration-300 hover:scale-110 transform"
            >
              💼 LinkedIn
            </a>
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform"
            >
              💻 GitHub
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-110 transform"
            >
              📸 Instagram
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center mt-8 space-x-3">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce delay-200"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full animate-bounce delay-300"></div>
          </div>
        </div>
      </footer>

      <FloatingChatbot />
    </div>
  )
}
