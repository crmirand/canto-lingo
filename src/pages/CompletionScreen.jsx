import { Star, Home, RotateCcw } from 'lucide-react'
import { Button } from '../components/ui/Button.jsx'

export function CompletionScreen({ lesson, stars, xpEarned, correct, total, onHome, onPracticeAgain }) {
  const pct = Math.round((correct / total) * 100)

  const messages = {
    3: ['Outstanding! 勁!', '🎉'],
    2: ['Well done! 做得好!', '🌟'],
    1: ['Keep going! 加油!', '💪'],
    0: ['Try again! 再試一次!', '🔄'],
  }
  const [msg, emoji] = messages[stars] ?? messages[1]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12 animate-fade-in">
      <div className="max-w-sm w-full mx-auto text-center">
        {/* Emoji */}
        <div className="text-7xl mb-4 animate-bounce-in">{emoji}</div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-1">{msg}</h1>
        <p className="text-gray-500 mb-6">You finished <span className="font-semibold text-gray-700">{lesson.title}</span></p>

        {/* Stars */}
        <div className="flex justify-center gap-3 mb-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`transition-all duration-300 ${n <= stars ? 'scale-110' : 'opacity-25'}`}
              style={{ transitionDelay: `${(n - 1) * 150}ms` }}
            >
              <Star
                size={44}
                className={n <= stars ? 'fill-yellow-400 text-yellow-400 drop-shadow-md' : 'fill-gray-200 text-gray-200'}
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <StatBox label="Correct" value={`${correct}/${total}`} color="text-green-600" />
          <StatBox label="Accuracy" value={`${pct}%`} color="text-blue-600" />
          <StatBox label="XP Earned" value={`+${xpEarned}`} color="text-yellow-600" />
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button variant="primary" size="lg" className="w-full flex items-center justify-center gap-2" onClick={onHome}>
            <Home size={18} /> Back to lessons
          </Button>
          <Button variant="secondary" size="md" className="w-full flex items-center justify-center gap-2" onClick={onPracticeAgain}>
            <RotateCcw size={16} /> Practice again
          </Button>
        </div>
      </div>
    </div>
  )
}

function StatBox({ label, value, color }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3">
      <p className={`text-xl font-extrabold ${color}`}>{value}</p>
      <p className="text-xs text-gray-400 mt-0.5">{label}</p>
    </div>
  )
}
