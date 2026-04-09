import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Flame, Star, Menu, X, RotateCcw } from 'lucide-react'

export function Header({ xp = 0, streak = 0, onReset }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleReset() {
    if (window.confirm('Reset all progress? This cannot be undone.')) {
      onReset()
      setMenuOpen(false)
    }
  }

  return (
    <>
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
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="text-gray-400 hover:text-gray-700 transition-colors p-1"
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-14 right-0 left-0 max-w-2xl mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mt-1">
              <button
                onClick={handleReset}
                className="w-full flex items-center gap-3 px-5 py-4 text-left text-red-600 hover:bg-red-50 transition-colors font-medium"
              >
                <RotateCcw size={17} />
                Reset all progress
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
