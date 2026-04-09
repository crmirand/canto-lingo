import { HashRouter, Routes, Route } from 'react-router-dom'
import { useProgress } from './hooks/useProgress.js'
import { Header } from './components/Header.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { LessonPage } from './pages/LessonPage.jsx'
import { LearnPage } from './pages/LearnPage.jsx'

export default function App() {
  const { xp, streak, lessonProgress, completeLesson } = useProgress()

  return (
    <HashRouter>
      <Routes>
        {/* Learning session gets full screen (no header) */}
        <Route
          path="/learn/:id"
          element={<LearnPage onComplete={completeLesson} />}
        />

        {/* All other pages have the header */}
        <Route
          path="/*"
          element={
            <div className="min-h-full flex flex-col">
              <Header xp={xp} streak={streak.current} />
              <main className="flex-1">
                <Routes>
                  <Route
                    path="/"
                    element={<HomePage xp={xp} streak={streak} lessonProgress={lessonProgress} />}
                  />
                  <Route
                    path="/lesson/:id"
                    element={<LessonPage lessonProgress={lessonProgress} />}
                  />
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  )
}
