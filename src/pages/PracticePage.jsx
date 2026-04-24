import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Trophy, RotateCcw } from 'lucide-react'
import { allLessons } from '../data/index.js'

// ─── helpers ────────────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function getAllVocabulary() {
  const seen = new Set()
  return allLessons
    .filter((l) => l.type !== 'reference' && l.vocabulary.length > 0)
    .flatMap((l) => l.vocabulary)
    .filter((v) => {
      if (seen.has(v.characters)) return false
      seen.add(v.characters)
      return true
    })
}

const PAIRS_PER_ROUND = 6

const MODES = [
  { id: 'char-yale',    label: '字 ↔ Yale'    },
  { id: 'char-english', label: '字 ↔ English' },
  { id: 'yale-english', label: 'Yale ↔ English' },
]

function buildTiles(items, mode) {
  const tiles = []
  items.forEach((item) => {
    if (mode === 'char-yale') {
      tiles.push({ id: `${item.id}-a`, pairId: item.id, label: item.characters, isChar: true })
      tiles.push({ id: `${item.id}-b`, pairId: item.id, label: item.yale,       isChar: false })
    } else if (mode === 'char-english') {
      tiles.push({ id: `${item.id}-a`, pairId: item.id, label: item.characters, isChar: true })
      tiles.push({ id: `${item.id}-b`, pairId: item.id, label: item.english,    isChar: false })
    } else {
      tiles.push({ id: `${item.id}-a`, pairId: item.id, label: item.yale,    isChar: false })
      tiles.push({ id: `${item.id}-b`, pairId: item.id, label: item.english, isChar: false })
    }
  })
  return shuffle(tiles)
}

function formatTime(ms) {
  const s = Math.floor(ms / 1000)
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

function getBestKey(mode) {
  return `practice-best-${mode}`
}

// ─── component ──────────────────────────────────────────────────────────────

export function PracticePage() {
  const allVocab = useMemo(getAllVocabulary, [])

  const [mode, setMode]           = useState('char-yale')
  const [tiles, setTiles]         = useState([])
  const [selected, setSelected]   = useState(null)   // tile id
  const [matched, setMatched]     = useState(new Set())
  const [wrong, setWrong]         = useState(null)   // { a, b }
  const [roundCount, setRoundCount] = useState(1)
  const [elapsed, setElapsed]     = useState(0)      // ms for display
  const [roundDone, setRoundDone] = useState(false)
  const [roundTime, setRoundTime] = useState(null)   // ms of completed round
  const [bestTime, setBestTime]   = useState(() => {
    const v = parseInt(localStorage.getItem(getBestKey('char-yale')) || '0')
    return v || null
  })

  const startRef   = useRef(null)   // Date.now() when round started
  const timerRef   = useRef(null)

  // ── start / restart a round ───────────────────────────────────────────────
  const startRound = useCallback((currentMode, round) => {
    const items = shuffle(allVocab).slice(0, PAIRS_PER_ROUND)
    setTiles(buildTiles(items, currentMode))
    setMatched(new Set())
    setSelected(null)
    setWrong(null)
    setElapsed(0)
    setRoundDone(false)
    setRoundTime(null)
    setRoundCount(round)
    startRef.current = Date.now()
  }, [allVocab])

  // Initial load
  useEffect(() => {
    startRound('char-yale', 1)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Timer tick
  useEffect(() => {
    if (roundDone) {
      clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(() => {
      setElapsed(Date.now() - (startRef.current ?? Date.now()))
    }, 200)
    return () => clearInterval(timerRef.current)
  }, [roundDone])

  // Mode switch — restart from round 1
  function handleModeChange(newMode) {
    setMode(newMode)
    const stored = parseInt(localStorage.getItem(getBestKey(newMode)) || '0')
    setBestTime(stored || null)
    startRound(newMode, 1)
  }

  // ── tile click ────────────────────────────────────────────────────────────
  const handleTileClick = useCallback((tileId) => {
    if (wrong) return

    setTiles((prev) => {
      const tile = prev.find((t) => t.id === tileId)
      if (!tile) return prev
      return prev
    })

    setSelected((prev) => {
      if (prev === tileId) return null   // deselect

      if (!prev) return tileId          // first selection

      // Second selection — check match
      const tileA = tiles.find((t) => t.id === prev)
      const tileB = tiles.find((t) => t.id === tileId)

      if (!tileA || !tileB) return null

      if (tileA.pairId === tileB.pairId) {
        // ✓ Match
        const newMatched = new Set([...matched, tileA.pairId])
        setMatched(newMatched)

        if (newMatched.size === PAIRS_PER_ROUND) {
          const elapsed = Date.now() - startRef.current
          setRoundTime(elapsed)
          setRoundDone(true)

          // Update best time
          const stored = parseInt(localStorage.getItem(getBestKey(mode)) || '0')
          if (!stored || elapsed < stored) {
            localStorage.setItem(getBestKey(mode), String(elapsed))
            setBestTime(elapsed)
          }
        }

        return null
      } else {
        // ✗ Wrong
        setWrong({ a: prev, b: tileId })
        setTimeout(() => {
          setWrong(null)
        }, 600)
        return null
      }
    })
  }, [tiles, matched, wrong, mode])

  // ── tile style ────────────────────────────────────────────────────────────
  function tileStyle(tile) {
    if (matched.has(tile.pairId))
      return 'border-green-400 bg-green-50 text-green-700 opacity-0 pointer-events-none scale-95'
    if (wrong && (wrong.a === tile.id || wrong.b === tile.id))
      return 'border-red-400 bg-red-50 text-red-700 animate-shake'
    if (selected === tile.id)
      return 'border-red-500 bg-red-50 text-red-700 scale-[1.04] shadow-md'
    return 'border-gray-200 bg-white hover:border-red-300 hover:bg-red-50 cursor-pointer'
  }

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <Link
          to="/"
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Back to home"
        >
          <ArrowLeft size={20} />
        </Link>
        <div className="flex-1">
          <h1 className="font-extrabold text-gray-900 text-lg leading-tight">Practice All</h1>
          <p className="text-xs text-gray-400 font-chinese">全部練習</p>
        </div>
        <span className="text-xs font-semibold text-gray-400">Round {roundCount}</span>
      </div>

      {/* Mode selector */}
      <div className="flex gap-2 mb-4">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => handleModeChange(m.id)}
            className={`flex-1 py-2 px-2 rounded-xl text-xs font-bold transition-all border ${
              mode === m.id
                ? 'bg-red-600 text-white border-red-600 shadow-sm'
                : 'bg-white text-gray-500 border-gray-200 hover:border-red-300'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Stats bar */}
      <div className="flex items-center justify-between mb-5 px-1">
        <div className="flex items-center gap-1.5 text-gray-500">
          <span className="text-sm font-mono font-bold text-gray-700 tabular-nums w-12">
            {formatTime(elapsed)}
          </span>
          <span className="text-xs text-gray-400">elapsed</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400">
          <Trophy size={14} className="text-yellow-400" />
          <span className="text-xs font-mono font-bold tabular-nums">
            {bestTime ? formatTime(bestTime) : '--:--'}
          </span>
          <span className="text-xs">best</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <span className="text-xs font-semibold">{matched.size}/{PAIRS_PER_ROUND}</span>
          <span className="text-xs">matched</span>
        </div>
      </div>

      {/* Tile grid */}
      {!roundDone ? (
        <div className="grid grid-cols-3 gap-2.5">
          {tiles.map((tile) => (
            <button
              key={tile.id}
              onClick={() => handleTileClick(tile.id)}
              disabled={matched.has(tile.pairId)}
              className={`rounded-2xl border-2 p-3 min-h-[80px] flex items-center justify-center text-center transition-all duration-150 leading-tight ${tileStyle(tile)}`}
            >
              {tile.isChar ? (
                <span className="font-chinese text-2xl font-bold">{tile.label}</span>
              ) : (
                <span className="text-sm font-semibold">{tile.label}</span>
              )}
            </button>
          ))}
        </div>
      ) : (
        /* Round complete */
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8 text-center animate-fade-in">
          <p className="text-5xl mb-3">🎉</p>
          <p className="font-extrabold text-green-800 text-2xl mb-1">Round {roundCount} done!</p>
          <div className="flex justify-center gap-6 mt-4 mb-6">
            <div className="text-center">
              <p className="text-2xl font-mono font-bold text-gray-800">{roundTime ? formatTime(roundTime) : '--'}</p>
              <p className="text-xs text-gray-500 mt-0.5">this round</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-mono font-bold text-yellow-600 flex items-center gap-1 justify-center">
                <Trophy size={18} className="text-yellow-400" />
                {bestTime ? formatTime(bestTime) : '--:--'}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">best time</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => startRound(mode, roundCount + 1)}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-2xl transition-colors flex items-center justify-center gap-2"
            >
              Next Round →
            </button>
            <button
              onClick={() => startRound(mode, 1)}
              className="bg-white border border-gray-200 text-gray-500 hover:text-gray-700 font-bold py-3 px-4 rounded-2xl transition-colors flex items-center justify-center"
              aria-label="Restart from round 1"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Vocab count */}
      <p className="text-center text-xs text-gray-400 mt-5">
        Pulling from {allVocab.length} words across all lessons
      </p>
    </div>
  )
}
