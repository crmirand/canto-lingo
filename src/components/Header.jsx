import { Link } from 'react-router-dom'
import { Flame, Star } from 'lucide-react'

export function Header({ xp = 0, streak = 0 }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-2xl">粵</span>
          <span className="font-extrabold text-xl text-red-600 tracking-tight">CantoLingo</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-orange-500">
            <Flame size={18} className={streak > 0 ? 'text-orange-500' : 'text-gray-300'} />
            <span>{streak}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-yellow-500">
            <Star size={18} className="fill-yellow-400 text-yellow-500" />
            <span>{xp.toLocaleString()} XP</span>
          </div>
        </div>
      </div>
    </header>
  )
}
