import { useCallback, useEffect, useState } from 'react'

/**
 * Wraps the Web Speech API for Cantonese (zh-HK) pronunciation.
 * On iOS/macOS the built-in Sinji/HK voice is high quality.
 * On Android it depends on the TTS engine installed.
 */
export function useSpeech() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!supported) return
    // Voices load asynchronously; wait for them
    function checkVoices() {
      const voices = window.speechSynthesis.getVoices()
      if (voices.length > 0) setReady(true)
    }
    checkVoices()
    window.speechSynthesis.addEventListener('voiceschanged', checkVoices)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', checkVoices)
  }, [supported])

  const speak = useCallback((text, { rate = 0.85 } = {}) => {
    if (!supported) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-HK'
    utterance.rate = rate

    // Prefer a voice explicitly tagged for zh-HK or Cantonese
    const voices = window.speechSynthesis.getVoices()
    const preferred =
      voices.find((v) => v.lang === 'zh-HK') ||
      voices.find((v) => v.lang.startsWith('zh-HK')) ||
      voices.find((v) => /cantonese/i.test(v.name)) ||
      voices.find((v) => v.lang.startsWith('zh'))
    if (preferred) utterance.voice = preferred

    window.speechSynthesis.speak(utterance)
  }, [supported])

  return { speak, supported, ready }
}
