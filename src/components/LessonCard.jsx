import { Link } from 'react-router-dom'
import { Star, Lock, CheckCircle } from 'lucide-react'

export function LessonCard({ lesson, progress, locked = false }) {
  const { completed, stars = 0 } = progress ?? {}

  return (
    <Link
      to={locked ? '#' : `/lesson/${lesson.id}`}
      className={`block rounded-2xl overflow-hidden shadow-sm border transition-all duration-200 ${
        locked
          ? 'opacity-50 cursor-not-allowed border-gray-200 bg-gray-50'
          : 'hover:shadow-md hover:-translate-y-0.5 border-gray-200 bg-white'
      }`}
      onClick={locked ? (e) => e.preventDefault() : undefined}
    >
      {/* Gradient banner */}
      <div className={`h-2 w-full bg-gradient-to-r ${lesson.colorFrom} ${lesson.colorTo}`} />

      <div className="p-4 flex items-center gap-4">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${lesson.colorFrom} ${lesson.colorTo} shadow-sm flex-shrink-0`}
        >
          {locked ? <Lock size={20} className="text-white" /> : lesson.icon}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-gray-900 truncate">{lesson.title}</h3>
            <span className="text-gray-400 text-sm font-chinese">({lesson.titleZh})</span>
          </div>
          <p className="text-sm text-gray-500 truncate mt-0.5">{lesson.description}</p>
          <p className="text-xs text-gray-400 mt-1">{lesson.vocabulary.length} words</p>
        </div>

        {/* Status */}
        <div className="flex-shrink-0 flex flex-col items-end gap-1">
          {completed ? (
            <>
              <CheckCircle size={18} className="text-green-500" />
              <div className="flex gap-0.5">
                {[1, 2, 3].map((n) => (
                  <Star
                    key={n}
                    size={12}
                    className={n <= stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'}
                  />
                ))}
              </div>
            </>
          ) : locked ? (
            <Lock size={18} className="text-gray-400" />
          ) : (
            <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-1 rounded-full">Start</span>
          )}
        </div>
      </div>
    </Link>
  )
}
