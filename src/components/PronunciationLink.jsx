/**
 * Opens a Forvo page to hear native Cantonese pronunciation.
 * Forvo has the best coverage of native HK Cantonese audio.
 */
export function PronunciationLink({ characters, className = '' }) {
  const url = `https://forvo.com/search/${encodeURIComponent(characters)}/yue/`
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-xs font-medium text-blue-500 hover:text-blue-700 transition-colors ${className}`}
      title="Hear pronunciation on Forvo"
      onClick={(e) => e.stopPropagation()}
    >
      🔊 <span className="underline underline-offset-2">Pronunciation</span>
    </a>
  )
}
