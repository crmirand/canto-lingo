const STORAGE_KEY = 'cantolingo_v1'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function save(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // storage full or unavailable — fail silently
  }
}

// --- XP ---
export function getXP() {
  return load().xp ?? 0
}

export function addXP(amount) {
  const data = load()
  data.xp = (data.xp ?? 0) + amount
  save(data)
  return data.xp
}

// --- Streak ---
export function getStreak() {
  const data = load()
  const today = todayStr()
  const lastActivity = data.lastActivity

  if (!lastActivity) return { current: 0, longest: 0 }

  const yesterday = offsetDay(-1)
  let current = data.streak ?? 0

  // If last activity was yesterday, streak is intact; if today, already counted
  if (lastActivity !== today && lastActivity !== yesterday) {
    // Streak broken — reset (but don't save here, just report)
    current = 0
  }

  return { current, longest: data.longestStreak ?? 0 }
}

export function recordActivityToday() {
  const data = load()
  const today = todayStr()
  const yesterday = offsetDay(-1)

  if (data.lastActivity === today) return // already recorded

  let current = data.streak ?? 0
  if (data.lastActivity === yesterday) {
    current += 1
  } else {
    current = 1
  }

  data.streak = current
  data.longestStreak = Math.max(current, data.longestStreak ?? 0)
  data.lastActivity = today
  save(data)
}

// --- Lesson progress ---
export function getLessonProgress(lessonId) {
  const data = load()
  return data.lessons?.[lessonId] ?? { completed: false, stars: 0, xpEarned: 0, attempts: 0 }
}

export function saveLessonResult(lessonId, { stars, xpEarned }) {
  const data = load()
  if (!data.lessons) data.lessons = {}
  const prev = data.lessons[lessonId] ?? { stars: 0, xpEarned: 0, attempts: 0 }
  data.lessons[lessonId] = {
    completed: true,
    stars: Math.max(prev.stars, stars),
    xpEarned: prev.xpEarned + xpEarned,
    attempts: prev.attempts + 1,
    lastAttempt: new Date().toISOString(),
  }
  data.xp = (data.xp ?? 0) + xpEarned
  save(data)
}

export function getAllLessonProgress() {
  return load().lessons ?? {}
}

// --- helpers ---
function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

function offsetDay(n) {
  const d = new Date()
  d.setDate(d.getDate() + n)
  return d.toISOString().slice(0, 10)
}

// --- Reset ---
export function resetAllProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}
