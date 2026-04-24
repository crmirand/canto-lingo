import { lessonIntro } from './lessons/lesson-intro.js'
import { lesson01 } from './lessons/lesson-01.js'
import { lesson02 } from './lessons/lesson-02.js'
import { lesson03 } from './lessons/lesson-03.js'
import { lesson04 } from './lessons/lesson-04.js'
import { lesson05 } from './lessons/lesson-05.js'
import { lesson06 } from './lessons/lesson-06.js'
import { lesson07 } from './lessons/lesson-07.js'
import { lesson08 } from './lessons/lesson-08.js'
import { lesson09 } from './lessons/lesson-09.js'
import { lesson10 } from './lessons/lesson-10.js'
import { lesson11 } from './lessons/lesson-11.js'
import { lesson12 } from './lessons/lesson-12.js'

// Add new lessons here — they appear automatically in the app
export const allLessons = [
  lessonIntro,
  lesson01, lesson02, lesson03,
  lesson04, lesson05, lesson06,
  lesson07, lesson08, lesson09,
  lesson10, lesson11, lesson12,
]

export const units = [
  {
    id: 'unit-0',
    title: 'Getting Started',
    titleZh: '入門',
    description: 'Language background and pronunciation guide',
    lessonIds: ['lesson-intro'],
  },
  {
    id: 'unit-1',
    title: 'Unit 1: Foundations',
    titleZh: '第一單元：基礎',
    description: 'Greetings, people, and numbers',
    lessonIds: ['lesson-01', 'lesson-02', 'lesson-03'],
  },
  {
    id: 'unit-2',
    title: 'Unit 2: Culture & Context',
    titleZh: '第二單元：文化與語境',
    description: 'Written vs. spoken language, Qingming Festival, and Cantonese background',
    lessonIds: ['lesson-04', 'lesson-05', 'lesson-06'],
  },
  {
    id: 'unit-3',
    title: 'Unit 3: Language & Identity',
    titleZh: '第三單元：語言與身份',
    description: 'Talking about Cantonese, Yale phonology, and entering tones',
    lessonIds: ['lesson-07', 'lesson-08', 'lesson-09'],
  },
  {
    id: 'unit-4',
    title: 'Unit 4: People & Relationships',
    titleZh: '第四單元：人際關係',
    description: 'Extended greetings, immediate family, and extended family',
    lessonIds: ['lesson-10', 'lesson-11', 'lesson-12'],
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
