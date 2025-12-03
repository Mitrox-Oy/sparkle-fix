"use client"

import { useEffect } from "react"

/**
 * MitroxAdvisorWidget Component
 *
 * This component serves as a placeholder for the Mitrox AI Advisor chatbot widget.
 *
 * TODO: To integrate Mitrox AI Advisor:
 * 1. Obtain the embed script from Mitrox
 * 2. Replace the placeholder content below with the actual script initialization
 * 3. Configure the widget settings (language, theme, etc.) as needed
 *
 * Example expected integration:
 * useEffect(() => {
 *   const script = document.createElement('script')
 *   script.src = 'https://mitrox.ai/widget.js'
 *   script.async = true
 *   script.onload = () => {
 *     window.MitroxAdvisor.init({
 *       apiKey: 'YOUR_API_KEY',
 *       language: 'fi', // or 'en'
 *       theme: 'dark',
 *       position: 'bottom-right'
 *     })
 *   }
 *   document.body.appendChild(script)
 *
 *   return () => {
 *     document.body.removeChild(script)
 *   }
 * }, [])
 */

interface MitroxAdvisorWidgetProps {
  /** Language for the chatbot interface */
  language?: "fi" | "en"
  /** Position of the widget on screen */
  position?: "bottom-right" | "bottom-left"
}

export function MitroxAdvisorWidget({ language = "fi", position = "bottom-right" }: MitroxAdvisorWidgetProps) {
  useEffect(() => {
    // TODO: Initialize Mitrox AI Advisor script here
    // The script will typically attach to the #mitrox-advisor-root element
    // or create its own floating widget

    console.log("Mitrox Advisor Widget mounted", { language, position })

    return () => {
      // TODO: Cleanup Mitrox script on unmount if needed
      console.log("Mitrox Advisor Widget unmounted")
    }
  }, [language, position])

  return (
    <>
      {/* 
        Root element for Mitrox AI Advisor
        The Mitrox script will use this element to mount the chatbot widget
      */}
      <div
        id="mitrox-advisor-root"
        data-language={language}
        data-position={position}
        aria-label="AI Customer Support Chat"
        className="fixed z-50"
        style={{
          [position.includes("right") ? "right" : "left"]: "20px",
          bottom: "20px",
        }}
      />
    </>
  )
}
