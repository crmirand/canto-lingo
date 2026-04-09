import { useState, useCallback } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { getLessonById } from '../data/index.js'
import { generateSession, calcStars, calcXP } from '../utils/exerciseGenerator.js'
import { ProgressBar } from '../components/ui/ProgressBar.jsx'
import { Flashcard } from '../components/exercises/Flashcard.jsx'
import { MultipleChoice } from '../components/exercises/MultipleChoice.jsx'
import { Matching } from '../components/exercises/Matching.jsx'
import { CompletionScreen } from './CompletionScreen.jsx'

export function LearnPage({ onComplete }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const lesson = getLessonById(id)

  const [exercises] = useState(() => lesson ? generateSession(lesson.vocabulary) : [])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [done, setDone] = useState(false)
  const [xpEarned, setXpEarned] = useState(0)
  const [stars, setStars] = useState(0)

  const handleExerciseComplete = useCallback((wasCorrect) => {
    const newCorrect = correctCount + (wasCorrect ? 1 : 0)
    const nextIdx = currentIdx + 1

    if (nextIdx >= exercises.length) {
      const s = calcStars(newCorrect, exercises.length)
      const xp = calcXP(newCorrect, exercises.length, s)
      setStars(s)
      setXpEarned(xp)
      setCorrectCount(newCorrect)
      onComplete(id, { stars: s, xpEarned: xp })
      setDone(true)
    } else {
      setCorrectCount(newCorrect)
      setCurrentIdx(nextIdx)
    }
  }, [correctCount, currentIdx, exercises.length, id, onComplete])

  if (!lesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">Lesson not found.</p>
        <Link to="/" className="text-red-600 font-semibold mt-4 inline-block">Go home</Link>
      </div>
    )
  }

  if (done) {
    return (
      <CompletionScreen
        lesson={lesson}
        stars={stars}
        xpEarned={xpEarned}
        correct={correctCount}
        total={exercises.length}
        onHome={() => navigate('/')}
        onPracticeAgain={() => navigate(`/learn/${id}`)}
      />
    )
  }

  const current = exercises[currentIdx]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate(`/lesson/${id}`)}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            aria-label="Exit lesson"
          >
            <X size={22} />
          </button>
          <ProgressBar value={currentIdx} max={exercises.length} className="flex-1" />
          <span className="text-xs font-semibold text-gray-400 flex-shrink-0 w-12 text-right">
            {currentIdx}/{exercises.length}
          </span>
        </div>
      </div>

      {/* Exercise area */}
      <div className="flex-1 flex flex-col justify-center px-4 py-8 max-w-2xl mx-auto w-full">
        {current && <ExerciseRenderer exercise={current} onComplete={handleExerciseComplete} />}
      </div>
    </div>
  )
}

function ExerciseRenderer({ exercise, onComplete }) {
  switch (exercise.type) {
    case 'flashcard':
      return <Flashcard exercise={exercise} onComplete={onComplete} />
    case 'mc':
      return <MultipleChoice exercise={exercise} onComplete={onComplete} />
    case 'matching':
      return <Matching exercise={exercise} onComplete={onComplete} />
    default:
      return null
  }
}
