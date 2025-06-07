"use client"

import { useState } from "react"
import { MessageCircle, X, Minimize2 } from "lucide-react"

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

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

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 bg-beige text-black p-4 rounded-full shadow-lg hover:bg-beige/90 transition-all duration-300 z-50 group animate-bounce-slow hover:animate-none"
          aria-label="Abrir chat con Foster"
        >
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-neutral-800 text-beige text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 whitespace-nowrap">
            ¡Hola! Soy Foster 👋
          </div>
          <div className="absolute inset-0 bg-beige rounded-full animate-ping opacity-20"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 bg-neutral-900 rounded-lg shadow-2xl z-50 transition-all duration-500 transform ${
            isMinimized ? "w-80 h-16 scale-95" : "w-96 h-[500px] scale-100"
          } animate-slide-up`}
        >
          {/* Chat Header */}
          <div className="bg-beige text-black p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">Foster</span>
              <span className="text-sm opacity-70">- Tu asistente virtual</span>
            </div>
            <div className="flex space-x-2">
              {!isMinimized && (
                <button
                  onClick={minimizeChat}
                  className="hover:bg-black/10 p-1 rounded transition-all duration-300 hover:scale-110"
                  aria-label="Minimizar chat"
                >
                  <Minimize2 size={16} />
                </button>
              )}
              <button
                onClick={toggleChat}
                className="hover:bg-black/10 p-1 rounded transition-all duration-300 hover:scale-110 hover:rotate-90"
                aria-label="Cerrar chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <div className="h-[calc(100%-64px)] p-0 animate-fade-in">
              <iframe
                src="https://default6ca34ae1466f44bca7aa0ac5a78c61.b1.environment.api.powerplatform.com/copilotstudio/dataverse-backed/authenticated/bots/cr3a3_agenteucjzek/conversations?api-version=2022-03-01-preview"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Foster - Chatbot Asistente"
                className="rounded-b-lg"
                allow="microphone; camera"
              />
            </div>
          )}

          {/* Minimized State */}
          {isMinimized && (
            <div
              className="flex items-center justify-center h-full cursor-pointer text-beige hover:text-beige/80 transition-colors duration-300"
              onClick={maximizeChat}
            >
              <span className="text-sm animate-pulse">Haz clic para expandir el chat</span>
            </div>
          )}
        </div>
      )}
    </>
  )
}
