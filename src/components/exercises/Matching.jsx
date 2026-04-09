import { useState, useEffect } from 'react'
import { Button } from '../ui/Button.jsx'

export function Matching({ exercise, onComplete }) {
  const { items } = exercise

  // Left column: characters. Right column: English meanings — shuffled independently.
  const [leftItems] = useState(() => [...items])
  const [rightItems] = useState(() => shuffle([...items]))
  const [selectedLeft, setSelectedLeft] = useState(null)
  const [selectedRight, setSelectedRight] = useState(null)
  const [matched, setMatched] = useState(new Set()) // Set of item ids
  const [wrong, setWrong] = useState(null) // { left, right } briefly flash red
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (matched.size === items.length && items.length > 0) {
      setDone(true)
    }
  }, [matched, items.length])

  function handleLeft(item) {
    if (matched.has(item.id)) return
    setSelectedLeft(item)
    if (selectedRight) attemptMatch(item, selectedRight)
  }

  function handleRight(item) {
    if (matched.has(item.id)) return
    setSelectedRight(item)
    if (selectedLeft) attemptMatch(selectedLeft, item)
  }

  function attemptMatch(left, right) {
    if (left.id === right.id) {
      setMatched((prev) => new Set([...prev, left.id]))
      setSelectedLeft(null)
      setSelectedRight(null)
    } else {
      setWrong({ left: left.id, right: right.id })
      setTimeout(() => {
        setWrong(null)
        setSelectedLeft(null)
        setSelectedRight(null)
      }, 600)
    }
  }

  function leftStyle(item) {
    if (matched.has(item.id)) return 'border-green-400 bg-green-50 text-green-700 opacity-60 cursor-default'
    if (wrong?.left === item.id) return 'border-red-400 bg-red-50 text-red-700 animate-shake'
    if (selectedLeft?.id === item.id) return 'border-red-500 bg-red-50 text-red-700 scale-[1.02] shadow-md'
    return 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 cursor-pointer'
  }

  function rightStyle(item) {
    if (matched.has(item.id)) return 'border-green-400 bg-green-50 text-green-700 opacity-60 cursor-default'
    if (wrong?.right === item.id) return 'border-red-400 bg-red-50 text-red-700 animate-shake'
    if (selectedRight?.id === item.id) return 'border-red-500 bg-red-50 text-red-700 scale-[1.02] shadow-md'
    return 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 cursor-pointer'
  }

  return (
    <div className="flex flex-col gap-5 w-full max-w-md mx-auto animate-fade-in">
      <div className="text-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Matching</p>
        <p className="text-sm text-gray-500 mt-1">Tap a card on each side to match</p>
      </div>

      {done ? (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-bounce-in">
          <p className="text-4xl mb-2">🎉</p>
          <p className="font-bold text-green-700 text-lg">All matched!</p>
          <p className="text-sm text-green-600 mt-1">Great work!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {/* Left: characters */}
          <div className="flex flex-col gap-2">
            {leftItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLeft(item)}
                disabled={matched.has(item.id)}
                className={`p-3 rounded-xl border-2 font-chinese text-2xl font-bold text-center transition-all duration-150 min-h-[60px] flex items-center justify-center ${leftStyle(item)}`}
              >
                {item.characters}
              </button>
            ))}
          </div>

          {/* Right: English */}
          <div className="flex flex-col gap-2">
            {rightItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleRight(item)}
                disabled={matched.has(item.id)}
                className={`p-3 rounded-xl border-2 text-sm font-semibold text-center transition-all duration-150 min-h-[60px] flex items-center justify-center leading-tight ${rightStyle(item)}`}
              >
                {item.english}
              </button>
            ))}
          </div>
        </div>
      )}

      {done && (
        <Button variant="success" className="w-full animate-slide-up" onClick={() => onComplete(true)}>
          Continue
        </Button>
      )}
    </div>
  )
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
