"use client"

import { useTheme } from "@/context/ThemeContext"
import { MoonIcon, SunIcon } from "lucide-react"

export function Header() {
  const { theme, toggleTheme} = useTheme()

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  )
}