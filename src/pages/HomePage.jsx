import { Flame, Star, BookOpen, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LessonCard } from '../components/LessonCard.jsx'
import { units, allLessons } from '../data/index.js'

export function HomePage({ xp, streak, lessonProgress }) {
  const allProgress = lessonProgress ?? {}

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-20">
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-red-600 to-orange-500 rounded-3xl p-6 text-white mb-6 shadow-lg">
        <h1 className="text-3xl font-extrabold tracking-tight">
          學廣東話 <span className="text-orange-200">Learn Cantonese</span>
        </h1>
        <p className="text-red-100 mt-1 text-sm">
          Yale romanization · Jyutping · Traditional Chinese
        </p>

        <div className="flex gap-4 mt-4">
          <Stat icon={<Flame size={18} />} value={streak.current} label="day streak" color="text-orange-200" />
          <Stat icon={<Star size={18} className="fill-yellow-300" />} value={xp.toLocaleString()} label="total XP" color="text-yellow-200" />
          <Stat
            icon={<BookOpen size={18} />}
            value={Object.values(allProgress).filter((p) => p.completed).length}
            label={`/ ${allLessons.length} done`}
            color="text-red-200"
          />
        </div>
      </div>

      {/* Practice All shortcut */}
      <Link
        to="/practice"
        className="flex items-center gap-3 bg-white border-2 border-red-100 hover:border-red-400 rounded-2xl px-5 py-4 mb-6 shadow-sm hover:shadow-md transition-all group"
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center flex-shrink-0 shadow-sm">
          <Zap size={22} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">Practice All Words</p>
          <p className="text-sm text-gray-500">Infinite matching game · all lessons</p>
        </div>
        <span className="text-xs font-bold text-red-500 bg-red-50 px-2.5 py-1 rounded-full flex-shrink-0">練習</span>
      </Link>

      {/* Units */}
      {units.map((unit) => {
        const lessons = unit.lessonIds
          .map((id) => allLessons.find((l) => l.id === id))
          .filter(Boolean)

        return (
          <section key={unit.id} className="mb-8">
            <div className="mb-3">
              <h2 className="font-bold text-gray-900 text-lg">{unit.title}</h2>
              <p className="text-sm text-gray-500">{unit.description}</p>
            </div>
            <div className="flex flex-col gap-3">
              {lessons.map((lesson, idx) => {
                // Reference lessons are always unlocked
                const isRef = lesson.type === 'reference'
                const prevLesson = !isRef && idx > 0 ? lessons[idx - 1] : null
                const locked = prevLesson ? !allProgress[prevLesson.id]?.completed : false
                return (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    progress={allProgress[lesson.id]}
                    locked={locked}
                  />
                )
              })}
            </div>
          </section>
        )
      })}

      <p className="text-center text-xs text-gray-400 mt-4">
        Progress saved in your browser — no account needed.
      </p>
    </div>
  )
}

function Stat({ icon, value, label, color }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={color}>{icon}</span>
      <span className="font-bold">{value}</span>
      <span className={`text-xs ${color}`}>{label}</span>
    </div>
  )
}
