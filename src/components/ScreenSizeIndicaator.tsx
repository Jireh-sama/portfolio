"use client"
import { Badge } from "@/components/ui/badge"
import useScreenSize from "@/hooks/useScreenSize"

const ScreenSizeIndicator = () => {
  const screenSize = useScreenSize()

  if (import.meta.env.VITE_NODE_ENV === 'PRODUCTION') {
    return null
  }
  return (
    <Badge className='fixed bottom-1 right-1 z-50 text-lg cursor-none pointer-events-none opacity-75'>
      <p>{screenSize.toUpperCase()}</p>
    </Badge>
  )
}

export default ScreenSizeIndicator