import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Play, Star, RotateCcw } from 'lucide-react'
import { getLessonById } from '../data/index.js'
import { Button } from '../components/ui/Button.jsx'
import { PronunciationLink } from '../components/PronunciationLink.jsx'
import { ReferenceLesson } from '../components/ReferenceLesson.jsx'

export function LessonPage({ lessonProgress }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const lesson = getLessonById(id)

  if (!lesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">Lesson not found.</p>
        <Link to="/" className="text-red-600 font-semibold mt-4 inline-block">Go home</Link>
      </div>
    )
  }

  const progress = lessonProgress?.[id]

  // Reference lessons render their own layout
  if (lesson.type === 'reference') {
    return <ReferenceLesson lesson={lesson} />
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-20">
      {/* Back */}
      <Link to="/" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-800 text-sm font-medium mb-4 transition-colors">
        <ArrowLeft size={16} /> Back
      </Link>

      {/* Header */}
      <div className={`rounded-2xl p-6 text-white bg-gradient-to-br ${lesson.colorFrom} ${lesson.colorTo} shadow-md mb-6`}>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-4xl">{lesson.icon}</span>
          <div>
            <h1 className="text-2xl font-extrabold">{lesson.title}</h1>
            <p className="font-chinese text-white/80">{lesson.titleZh}</p>
          </div>
        </div>
        <p className="text-white/80 text-sm mt-2">{lesson.description}</p>

        {progress?.completed && (
          <div className="flex gap-1 mt-3">
            {[1, 2, 3].map((n) => (
              <Star
                key={n}
                size={20}
                className={n <= progress.stars ? 'fill-yellow-300 text-yellow-300' : 'text-white/30 fill-white/30'}
              />
            ))}
          </div>
        )}
      </div>

      {/* Vocabulary preview */}
      <div className="mb-6">
        <h2 className="font-bold text-gray-900 mb-3">Vocabulary ({lesson.vocabulary.length} words)</h2>
        <div className="flex flex-col gap-2">
          {lesson.vocabulary.map((v) => (
            <div key={v.id} className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 flex items-center gap-4">
              <span className="font-chinese text-2xl font-bold text-gray-900 w-16 flex-shrink-0">{v.characters}</span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-red-600 text-sm">{v.yale}</p>
                <p className="text-xs text-gray-400">{v.jyutping}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-sm text-gray-600 text-right leading-tight">{v.english}</p>
                <PronunciationLink characters={v.characters} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-3">
        <Button
          variant="primary"
          size="lg"
          className="flex-1 flex items-center justify-center gap-2"
          onClick={() => navigate(`/learn/${lesson.id}`)}
        >
          <Play size={18} />
          {progress?.completed ? 'Practice Again' : 'Start Lesson'}
        </Button>
        {progress?.completed && (
          <Button
            variant="secondary"
            size="lg"
            className="flex items-center justify-center gap-2 px-4"
            onClick={() => navigate(`/learn/${lesson.id}?mode=review`)}
          >
            <RotateCcw size={18} />
          </Button>
        )}
      </div>
    </div>
  )
}
