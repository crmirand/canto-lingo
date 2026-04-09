import { useState } from 'react'
import { Volume2 } from 'lucide-react'
import { useSpeech } from '../hooks/useSpeech.js'

export function SpeakButton({ characters, size = 'md', className = '' }) {
  const { speak, supported } = useSpeech()
  const [playing, setPlaying] = useState(false)

  if (!supported) return null

  function handleClick(e) {
    e.stopPropagation()
    setPlaying(true)
    speak(characters)
    setTimeout(() => setPlaying(false), 1200)
  }

  const sizeMap = { sm: 14, md: 18, lg: 22 }
  const iconSize = sizeMap[size] ?? 18

  return (
    <button
      onClick={handleClick}
      title="Listen to pronunciation"
      className={`inline-flex items-center justify-center rounded-full transition-all duration-150
        ${playing
          ? 'text-blue-600 bg-blue-100 scale-110'
          : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50'
        }
        ${size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8'}
        ${className}`}
      aria-label="Play pronunciation"
    >
      <Volume2 size={iconSize} />
    </button>
  )
}
