import { lesson01 } from './lessons/lesson-01.js'
import { lesson02 } from './lessons/lesson-02.js'
import { lesson03 } from './lessons/lesson-03.js'

// Add new lessons here — they appear automatically in the app
export const allLessons = [lesson01, lesson02, lesson03]

export const units = [
  {
    id: 'unit-1',
    title: 'Unit 1: Foundations',
    titleZh: '第一單元：基礎',
    description: 'Greetings, people, and numbers',
    lessonIds: ['lesson-01', 'lesson-02', 'lesson-03'],
  },
]

export function getLessonById(id) {
  return allLessons.find((l) => l.id === id)
}

export function getLessonsForUnit(unitId) {
  const unit = units.find((u) => u.id === unitId)
  if (!unit) return []
  return unit.lessonIds.map(getLessonById).filter(Boolean)
}
