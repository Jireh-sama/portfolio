import { useState, useEffect } from "react"

type ScreenBreakPoints = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenBreakPoints>("md")

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) setScreenSize("xs")  // sm: 640px
      else if (window.innerWidth < 768) setScreenSize("sm")  // md: 768px
      else if (window.innerWidth < 1024) setScreenSize("md")  // lg: 1024px
      else if (window.innerWidth < 1280) setScreenSize("lg")  // xl: 1280px
      else if (window.innerWidth < 1536) setScreenSize("xl")  // xl: 1536px
      else setScreenSize("2xl")
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return screenSize
}

export default useScreenSize