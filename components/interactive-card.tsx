"use client"

import type React from "react"

import { useState } from "react"

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: boolean
  glowEffect?: boolean
}

export default function InteractiveCard({
  children,
  className = "",
  hoverScale = true,
  glowEffect = false,
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`
        transition-all duration-300 ease-out cursor-pointer
        ${hoverScale ? "hover:scale-105" : ""}
        ${glowEffect && isHovered ? "shadow-lg shadow-beige/20" : ""}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}
