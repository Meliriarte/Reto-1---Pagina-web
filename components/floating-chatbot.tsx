"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Minimize2, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy Foster, tu asistente virtual. ¿En qué puedo ayudarte hoy? 😊",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const minimizeChat = () => {
    setIsMinimized(true)
  }

  const maximizeChat = () => {
    setIsMinimized(false)
  }

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("hola") || message.includes("hi")) {
      return "¡Hola! Me alegra conocerte. Soy Foster y estoy aquí para ayudarte a conocer más sobre Melissa y sus proyectos. ¿Qué te gustaría saber?"
    }

    if (message.includes("melissa") || message.includes("quien es")) {
      return "Melissa es una estudiante de Ingeniería de Sistemas de 21 años, apasionada por la programación (especialmente Python) y los viajes en moto. ¡Es una persona muy talentosa y soñadora!"
    }

    if (message.includes("proyecto") || message.includes("myeconomy") || message.includes("beautycraf")) {
      return "Melissa ha trabajado en proyectos increíbles como MyEconomy (una app de finanzas personales) y BeautyCraf (un emprendimiento de belleza personalizada). ¿Te gustaría saber más detalles de alguno?"
    }

    if (message.includes("hobby") || message.includes("gusta")) {
      return "A Melissa le encanta ver películas, viajar en moto descubriendo nuevos lugares de Colombia, y jugar videojuegos para relajarse. ¡Tiene gustos muy variados!"
    }

    if (message.includes("contacto") || message.includes("contactar")) {
      return "Puedes encontrar más información de contacto en las redes sociales que aparecen en el footer de la página. ¡Melissa estará encantada de conectar contigo!"
    }

    if (message.includes("gracias")) {
      return "¡De nada! Ha sido un placer ayudarte. Si tienes más preguntas sobre Melissa o sus proyectos, no dudes en preguntarme. 😊"
    }

    return "Esa es una pregunta interesante. Te recomiendo explorar las diferentes secciones de la página para conocer más sobre Melissa, sus hobbies y proyectos. ¿Hay algo específico que te gustaría saber?"
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 z-50 group animate-bounce-slow hover:animate-none hover:scale-110"
          aria-label="Abrir chat con Foster"
        >
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-neutral-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 whitespace-nowrap">
            ¡Hola! Soy Foster 👋
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-20"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 bg-neutral-900 rounded-2xl shadow-2xl z-50 transition-all duration-500 transform border border-purple-500/20 ${
            isMinimized ? "w-80 h-16 scale-95" : "w-96 h-[500px] scale-100"
          }`}
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <span className="font-semibold">Foster</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm opacity-90">Tu asistente virtual</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              {!isMinimized && (
                <button
                  onClick={minimizeChat}
                  className="hover:bg-white/10 p-2 rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label="Minimizar chat"
                >
                  <Minimize2 size={16} />
                </button>
              )}
              <button
                onClick={toggleChat}
                className="hover:bg-white/10 p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-90"
                aria-label="Cerrar chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <div className="flex flex-col h-[calc(100%-80px)]">
              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-neutral-900 to-neutral-800">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    {message.isBot && (
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[70%] p-3 rounded-2xl ${
                        message.isBot
                          ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30"
                          : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    {!message.isBot && (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-2xl border border-purple-500/30">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-neutral-700 bg-neutral-800">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 bg-neutral-700 text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-xl hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Minimized State */}
          {isMinimized && (
            <div
              className="flex items-center justify-center h-full cursor-pointer text-white hover:text-purple-300 transition-colors duration-300"
              onClick={maximizeChat}
            >
              <span className="text-sm animate-pulse">💬 Haz clic para expandir el chat</span>
            </div>
          )}
        </div>
      )}
    </>
  )
}
