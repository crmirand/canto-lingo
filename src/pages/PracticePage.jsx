import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Trophy, RotateCcw, ChevronLeft, ChevronRight, Shuffle, Copy, Check } from 'lucide-react'
import { allLessons } from '../data/index.js'

// ─── shared helpers ──────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function getVocabulary(lessonIds) {
  const seen = new Set()
  return allLessons
    .filter((l) => l.type !== 'reference' && l.vocabulary?.length > 0)
    .filter((l) => !lessonIds || lessonIds.includes(l.id))
    .flatMap((l) => l.vocabulary)
    .filter((v) => {
      if (seen.has(v.characters)) return false
      seen.add(v.characters)
      return true
    })
}

const MODES = [
  { id: 'char-yale',    label: '字 ↔ Yale'      },
  { id: 'char-english', label: '字 ↔ English'   },
  { id: 'yale-english', label: 'Yale ↔ English' },
]

const CATEGORIES = [
  { id: 'all',           label: 'All Words',       emoji: '📚', lessonIds: null },
  { id: 'greetings',     label: 'Greetings',       emoji: '👋', lessonIds: ['lesson-01', 'lesson-10'] },
  { id: 'people',        label: 'People',          emoji: '🧑', lessonIds: ['lesson-02'] },
  { id: 'numbers',       label: 'Numbers',         emoji: '🔢', lessonIds: ['lesson-03'] },
  { id: 'culture',       label: 'Culture',         emoji: '✍️', lessonIds: ['lesson-04'] },
  { id: 'qingming',      label: 'Qingming 清明',   emoji: '🌸', lessonIds: ['lesson-05'] },
  { id: 'language',      label: 'Language',        emoji: '🗣️', lessonIds: ['lesson-07'] },
  { id: 'introductions', label: 'Introductions',   emoji: '🤝', lessonIds: ['lesson-13'] },
  { id: 'family',        label: 'Family',          emoji: '👨‍👩‍👧‍👦', lessonIds: ['lesson-11', 'lesson-12'] },
  { id: 'daily',         label: 'Daily Life',      emoji: '📅', lessonIds: ['lesson-14', 'lesson-15'] },
  { id: 'numbers-ext',  label: 'Numbers+',        emoji: '🔢', lessonIds: ['lesson-03', 'lesson-17'] },
  { id: 'money',        label: 'Money',           emoji: '💰', lessonIds: ['lesson-18'] },
  { id: 'measure',      label: 'Measure Words',   emoji: '📏', lessonIds: ['lesson-19'] },
  { id: 'shopping',     label: 'Shopping',        emoji: '🛍️', lessonIds: ['lesson-20'] },
]

// ─── matching game helpers ───────────────────────────────────────────────────

const PAIRS_PER_ROUND = 6

function buildTiles(items, mode) {
  const tiles = []
  items.forEach((item) => {
    if (mode === 'char-yale') {
      tiles.push({ id: `${item.id}-a`, pairId: item.id, label: item.characters, isChar: true  })
      tiles.push({ id: `${item.id}-b`, pairId: item.id, label: item.yale,       isChar: false })
    } else if (mode === 'char-english') {
      tiles.push({ id: `${item.id}-a`, pairId: item.id, label: item.characters, isChar: true  })
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

// ─── page ────────────────────────────────────────────────────────────────────

export function PracticePage() {
  const [view, setView]         = useState('cards')      // 'cards' | 'match'
  const [mode, setMode]         = useState('char-yale')
  const [category, setCategory] = useState('all')

  const activeCat = CATEGORIES.find((c) => c.id === category)
  const vocab = useMemo(
    () => getVocabulary(activeCat?.lessonIds ?? null),
    [category] // eslint-disable-line react-hooks/exhaustive-deps
  )

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <Link to="/" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Back">
          <ArrowLeft size={20} />
        </Link>
        <div className="flex-1">
          <h1 className="font-extrabold text-gray-900 text-lg leading-tight">
            {activeCat?.id === 'all' ? 'Practice All' : activeCat?.label}
          </h1>
          <p className="text-xs text-gray-400">
            {activeCat?.id === 'all' ? '全部練習' : activeCat?.emoji} · {vocab.length} words
          </p>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none -mx-4 px-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`flex-shrink-0 flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-bold transition-all border whitespace-nowrap ${
              category === cat.id
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* View toggle */}
      <div className="flex gap-1 mb-4 bg-gray-100 p-1 rounded-xl">
        {[{ id: 'cards', label: 'Flashcards' }, { id: 'match', label: 'Match' }].map((v) => (
          <button
            key={v.id}
            onClick={() => setView(v.id)}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              view === v.id
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Mode selector */}
      <div className="flex gap-2 mb-5">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
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

      {vocab.length === 0 ? (
        <p className="text-center text-gray-400 py-16 text-sm">No vocabulary in this category yet.</p>
      ) : view === 'cards' ? (
        <FlashcardDeck vocab={vocab} mode={mode} />
      ) : (
        <MatchGame vocab={vocab} mode={mode} />
      )}
    </div>
  )
}

// ─── flashcard deck ──────────────────────────────────────────────────────────

function getFront(item, mode) {
  if (mode === 'char-yale')    return { label: item.characters, isChar: true  }
  if (mode === 'char-english') return { label: item.characters, isChar: true  }
  return                              { label: item.yale,       isChar: false }
}

function getBack(item, mode) {
  if (mode === 'char-yale')    return { label: item.yale,    isChar: false, sub: item.english   }
  if (mode === 'char-english') return { label: item.english, isChar: false, sub: item.yale      }
  return                              { label: item.english, isChar: false, sub: item.characters }
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  function handleCopy(e) {
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 rounded-lg text-gray-300 hover:text-gray-500 hover:bg-gray-50 transition-colors"
      aria-label="Copy character"
    >
      {copied ? <Check size={15} className="text-green-500" /> : <Copy size={15} />}
    </button>
  )
}

function FlashcardDeck({ vocab, mode }) {
  const [deck, setDeck]       = useState(() => shuffle(vocab))
  const [index, setIndex]     = useState(0)
  const [flipped, setFlipped] = useState(false)

  // Reset flip whenever card or mode changes
  useEffect(() => { setFlipped(false) }, [index, mode])

  // Reshuffle when mode changes
  useEffect(() => {
    setDeck(shuffle(vocab))
    setIndex(0)
  }, [mode, vocab])

  const card  = deck[index]
  const front = getFront(card, mode)
  const back  = getBack(card, mode)
  const total = deck.length

  function prev() { setIndex((i) => (i - 1 + total) % total) }
  function next() { setIndex((i) => (i + 1) % total) }
  function reshuffle() { setDeck(shuffle(vocab)); setIndex(0) }

  // Keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === ' ' || e.key === 'Enter') setFlipped((f) => !f)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Progress */}
      <div className="flex items-center gap-3 w-full">
        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-500 rounded-full transition-all duration-300"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
        <span className="text-xs font-mono font-semibold text-gray-400 flex-shrink-0">
          {index + 1} / {total}
        </span>
      </div>

      {/* Card */}
      <div
        className="relative w-full bg-white rounded-3xl shadow-lg border border-gray-100 cursor-pointer select-none min-h-56 flex flex-col items-center justify-center p-8 gap-4 transition-all duration-150 active:scale-[0.98]"
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setFlipped((f) => !f)}
      >
        <CopyButton text={card.characters} />
        {!flipped ? (
          <>
            {front.isChar
              ? <span className="font-chinese text-7xl font-bold text-gray-900 leading-none">{front.label}</span>
              : <span className="text-3xl font-bold text-red-600 text-center leading-snug">{front.label}</span>
            }
            <span className="text-xs text-gray-400 mt-2">tap to reveal</span>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 animate-slide-up w-full">
            {/* Echo the front in small */}
            {front.isChar
              ? <span className="font-chinese text-2xl font-bold text-gray-400">{front.label}</span>
              : <span className="text-base font-semibold text-gray-400">{front.label}</span>
            }
            <div className="w-full border-t border-gray-100 my-1" />
            {/* Main back content */}
            {back.isChar
              ? <span className="font-chinese text-5xl font-bold text-gray-900">{back.label}</span>
              : <span className="text-2xl font-bold text-red-600 text-center leading-snug">{back.label}</span>
            }
            {/* Sub-info */}
            {back.sub && (
              back.sub.match(/[\u4e00-\u9fff]/)
                ? <span className="font-chinese text-xl text-gray-500">{back.sub}</span>
                : <span className="text-sm text-gray-500 text-center">{back.sub}</span>
            )}
            {/* Notes if any */}
            {card.notes && (
              <p className="text-xs text-gray-400 italic text-center mt-1 max-w-xs leading-relaxed">{card.notes}</p>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-3 w-full">
        <button
          onClick={prev}
          className="flex-1 flex items-center justify-center gap-1 bg-white border border-gray-200 hover:border-gray-300 text-gray-600 font-semibold py-3 rounded-2xl transition-all"
          aria-label="Previous card"
        >
          <ChevronLeft size={20} /> Prev
        </button>
        <button
          onClick={reshuffle}
          className="bg-white border border-gray-200 hover:border-gray-300 text-gray-500 p-3 rounded-2xl transition-all"
          aria-label="Shuffle deck"
        >
          <Shuffle size={18} />
        </button>
        <button
          onClick={next}
          className="flex-1 flex items-center justify-center gap-1 bg-white border border-gray-200 hover:border-gray-300 text-gray-600 font-semibold py-3 rounded-2xl transition-all"
          aria-label="Next card"
        >
          Next <ChevronRight size={20} />
        </button>
      </div>

      <p className="text-xs text-gray-400">← → arrow keys · space to flip</p>
    </div>
  )
}

// ─── matching game ───────────────────────────────────────────────────────────

function MatchGame({ vocab, mode }) {
  const [tiles, setTiles]         = useState([])
  const [selected, setSelected]   = useState(null)
  const [matched, setMatched]     = useState(new Set())
  const [wrong, setWrong]         = useState(null)
  const [roundCount, setRoundCount] = useState(1)
  const [elapsed, setElapsed]     = useState(0)
  const [roundDone, setRoundDone] = useState(false)
  const [roundTime, setRoundTime] = useState(null)
  const [bestTime, setBestTime]   = useState(() => {
    const v = parseInt(localStorage.getItem(getBestKey('char-yale')) || '0')
    return v || null
  })

  const startRef = useRef(null)
  const timerRef = useRef(null)

  const startRound = useCallback((currentMode, round) => {
    const items = shuffle(vocab).slice(0, PAIRS_PER_ROUND)
    setTiles(buildTiles(items, currentMode))
    setMatched(new Set())
    setSelected(null)
    setWrong(null)
    setElapsed(0)
    setRoundDone(false)
    setRoundTime(null)
    setRoundCount(round)
    startRef.current = Date.now()
  }, [vocab])

  useEffect(() => { startRound(mode, 1) }, [mode]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const stored = parseInt(localStorage.getItem(getBestKey(mode)) || '0')
    setBestTime(stored || null)
  }, [mode])

  useEffect(() => {
    if (roundDone) { clearInterval(timerRef.current); return }
    timerRef.current = setInterval(() => {
      setElapsed(Date.now() - (startRef.current ?? Date.now()))
    }, 200)
    return () => clearInterval(timerRef.current)
  }, [roundDone])

  const handleTileClick = useCallback((tileId) => {
    if (wrong) return
    setSelected((prev) => {
      if (prev === tileId) return null
      if (!prev) return tileId
      const tileA = tiles.find((t) => t.id === prev)
      const tileB = tiles.find((t) => t.id === tileId)
      if (!tileA || !tileB) return null
      if (tileA.pairId === tileB.pairId) {
        const newMatched = new Set([...matched, tileA.pairId])
        setMatched(newMatched)
        if (newMatched.size === PAIRS_PER_ROUND) {
          const ms = Date.now() - startRef.current
          setRoundTime(ms)
          setRoundDone(true)
          const stored = parseInt(localStorage.getItem(getBestKey(mode)) || '0')
          if (!stored || ms < stored) {
            localStorage.setItem(getBestKey(mode), String(ms))
            setBestTime(ms)
          }
        }
        return null
      } else {
        setWrong({ a: prev, b: tileId })
        setTimeout(() => setWrong(null), 600)
        return null
      }
    })
  }, [tiles, matched, wrong, mode])

  function tileStyle(tile) {
    if (matched.has(tile.pairId))
      return 'border-green-400 bg-green-50 text-green-700 opacity-0 pointer-events-none scale-95'
    if (wrong && (wrong.a === tile.id || wrong.b === tile.id))
      return 'border-red-400 bg-red-50 text-red-700 animate-shake'
    if (selected === tile.id)
      return 'border-red-500 bg-red-50 text-red-700 scale-[1.04] shadow-md'
    return 'border-gray-200 bg-white hover:border-red-300 hover:bg-red-50 cursor-pointer'
  }

  return (
    <>
      {/* Stats bar */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-mono font-bold text-gray-700 tabular-nums w-12">{formatTime(elapsed)}</span>
          <span className="text-xs text-gray-400">elapsed</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400">
          <Trophy size={14} className="text-yellow-400" />
          <span className="text-xs font-mono font-bold tabular-nums">{bestTime ? formatTime(bestTime) : '--:--'}</span>
          <span className="text-xs">best</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <span className="text-xs font-semibold">{matched.size}/{PAIRS_PER_ROUND}</span>
          <span className="text-xs">matched · round {roundCount}</span>
        </div>
      </div>

      {!roundDone ? (
        <div className="grid grid-cols-3 gap-2.5">
          {tiles.map((tile) => (
            <button
              key={tile.id}
              onClick={() => handleTileClick(tile.id)}
              disabled={matched.has(tile.pairId)}
              className={`rounded-2xl border-2 p-3 min-h-[80px] flex items-center justify-center text-center transition-all duration-150 leading-tight ${tileStyle(tile)}`}
            >
              {tile.isChar
                ? <span className="font-chinese text-2xl font-bold">{tile.label}</span>
                : <span className="text-sm font-semibold">{tile.label}</span>
              }
            </button>
          ))}
        </div>
      ) : (
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
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-2xl transition-colors"
            >
              Next Round →
            </button>
            <button
              onClick={() => startRound(mode, 1)}
              className="bg-white border border-gray-200 text-gray-500 hover:text-gray-700 p-3 rounded-2xl transition-colors"
              aria-label="Restart"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
