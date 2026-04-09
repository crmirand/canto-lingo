import { useState } from 'react'
import { Button } from '../ui/Button.jsx'
import { PronunciationLink } from '../PronunciationLink.jsx'

export function Flashcard({ exercise, onComplete }) {
  const [flipped, setFlipped] = useState(false)
  const { item } = exercise

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto animate-fade-in">
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Flashcard</p>

      {/* Card */}
      <div
        className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 cursor-pointer select-none min-h-48"
        onClick={() => !flipped && setFlipped(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && !flipped && setFlipped(true)}
      >
        <div className="p-8 flex flex-col items-center justify-center min-h-48 gap-3">
          <p className="font-chinese text-6xl font-bold text-gray-900 text-center leading-tight">
            {item.characters}
          </p>

          {!flipped && (
            <p className="text-sm text-gray-400 mt-2">Tap to reveal</p>
          )}

          {flipped && (
            <div className="flex flex-col items-center gap-2 animate-slide-up border-t border-gray-100 w-full pt-4 mt-2">
              <p className="text-xl font-semibold text-red-600 tracking-wide">{item.yale}</p>
              <p className="text-sm text-gray-500">{item.jyutping}</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{item.english}</p>
              {item.notes && (
                <p className="text-xs text-gray-400 text-center mt-1 italic max-w-xs">{item.notes}</p>
              )}
              <PronunciationLink characters={item.characters} className="mt-2" />
            </div>
          )}
        </div>
      </div>

      {flipped ? (
        <div className="flex gap-3 w-full">
          <Button variant="secondary" className="flex-1" onClick={() => onComplete(false)}>
            Still learning
          </Button>
          <Button variant="success" className="flex-1" onClick={() => onComplete(true)}>
            Got it!
          </Button>
        </div>
      ) : (
        <Button variant="primary" className="w-full" onClick={() => setFlipped(true)}>
          Reveal
        </Button>
      )}
    </div>
  )
}
