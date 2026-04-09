import { useState, useEffect, useCallback } from 'react'
import {
  getXP,
  getStreak,
  getAllLessonProgress,
  saveLessonResult,
  recordActivityToday,
} from '../utils/storage.js'

export function useProgress() {
  const [xp, setXP] = useState(() => getXP())
  const [streak, setStreak] = useState(() => getStreak())
  const [lessonProgress, setLessonProgress] = useState(() => getAllLessonProgress())

  const refresh = useCallback(() => {
    setXP(getXP())
    setStreak(getStreak())
    setLessonProgress(getAllLessonProgress())
  }, [])

  const completeLesson = useCallback((lessonId, result) => {
    saveLessonResult(lessonId, result)
    recordActivityToday()
    refresh()
  }, [refresh])

  // Re-sync when tab gets focus (in case another tab updated storage)
  useEffect(() => {
    window.addEventListener('focus', refresh)
    return () => window.removeEventListener('focus', refresh)
  }, [refresh])

  return { xp, streak, lessonProgress, completeLesson, refresh }
}
