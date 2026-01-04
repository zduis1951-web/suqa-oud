"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CircleState {
  id: number
  x: number
  y: number
  color: string
  fadeState: "in" | "out" | null
}

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const [isListening, setIsListening] = React.useState(false)
    const [circles, setCircles] = React.useState<CircleState[]>([])
    const lastAddedRef = React.useRef(0)

    const createCircle = React.useCallback((x: number, y: number) => {
      const buttonWidth = buttonRef.current?.offsetWidth || 0
      const xPos = x / buttonWidth
      const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${
        xPos * 100
      }%)`

      setCircles((prev) => [
        ...prev,
        { id: Date.now(), x, y, color, fadeState: null },
      ])
    }, [])

    const handlePointerMove = React.useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        if (!isListening) return
        
        const currentTime = Date.now()
        if (currentTime - lastAddedRef.current > 100) {
          lastAddedRef.current = currentTime
          const rect = event.currentTarget.getBoundingClientRect()
          const x = event.clientX - rect.left
          const y = event.clientY - rect.top
          createCircle(x, y)
        }
      },
      [isListening, createCircle]
    )

    const handlePointerEnter = React.useCallback(() => {
      setIsListening(true)
    }, [])

    const handlePointerLeave = React.useCallback(() => {
      setIsListening(false)
    }, [])

    React.useEffect(() => {
      circles.forEach((circle) => {
        if (!circle.fadeState) {
          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) =>
                c.id === circle.id ? { ...c, fadeState: "in" } : c
              )
            )
          }, 0)

          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) =>
                c.id === circle.id ? { ...c, fadeState: "out" } : c
              )
            )
          }, 1000)

          setTimeout(() => {
            setCircles((prev) => prev.filter((c) => c.id !== circle.id))
          }, 2200)
        }
      })
    }, [circles])

    // Merge refs
    React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement)

    return (
      <button
        ref={buttonRef}
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden",
          "px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6",
          "text-xs sm:text-sm font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase",
          // Liquid glass effect - more transparent
          "bg-transparent backdrop-blur-[2px]",
          "text-gold",
          "border border-gold/60",
          "transition-all duration-700 ease-out",
          "hover:bg-gold/5 hover:border-gold hover:shadow-[0_0_30px_rgba(180,140,50,0.12)]",
          "hover:scale-[1.02]",
          "active:scale-[0.98]",
          "[--circle-start:hsl(43_75%_45%/0.2)] [--circle-end:hsl(43_75%_55%/0.15)]",
          className
        )}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        {/* Subtle glass reflection */}
        <span className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Animated border glow on hover */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <span className="absolute inset-[-1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent animate-[shimmer_2.5s_infinite]" />
        </span>
        
        {/* Circle effects */}
        {circles.map(({ id, x, y, color, fadeState }) => (
          <span
            key={id}
            className={cn(
              "pointer-events-none absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl transition-opacity duration-1000",
              fadeState === "in" && "opacity-80",
              fadeState === "out" && "opacity-0",
              !fadeState && "opacity-0"
            )}
            style={{
              left: x,
              top: y,
              background: color,
            }}
          />
        ))}
        
        {/* Text content with z-index */}
        <span className="relative z-10 transition-all duration-500 group-hover:tracking-[0.35em]">
          {children}
        </span>
      </button>
    )
  }
)

HoverButton.displayName = "HoverButton"

export { HoverButton }
