/**
 * Generates a mixed set of exercises from a lesson's vocabulary.
 * Exercise types:
 *  - 'mc-meaning'   : see characters + yale, pick English meaning
 *  - 'mc-yale'      : see English, pick correct Yale romanization
 *  - 'mc-characters': see English, pick correct characters
 *  - 'mc-jyutping'  : see Yale, pick correct Jyutping
 *  - 'flashcard'    : flip card (characters → meaning)
 *  - 'matching'     : match 4 pairs
 */

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickDistractors(pool, correct, field, count) {
  return shuffle(pool.filter((v) => v.id !== correct.id))
    .slice(0, count)
    .map((v) => v[field])
}

export function generateSession(vocabulary, targetCount = 20) {
  if (vocabulary.length === 0) return []

  const pool = shuffle(vocabulary)
  const exercises = []

  // Always start with a flashcard batch for new vocab
  const flashcardItems = pool.slice(0, Math.min(4, pool.length))
  for (const item of flashcardItems) {
    exercises.push(makeFlashcard(item))
  }

  // Then multiple choice exercises for all items
  const mcItems = shuffle(pool).slice(0, Math.min(targetCount - flashcardItems.length, pool.length))
  for (const item of mcItems) {
    const type = pickMcType(vocabulary)
    exercises.push(makeMC(type, item, vocabulary))
  }

  // Add a matching exercise if we have enough items
  if (vocabulary.length >= 4) {
    const matchItems = shuffle(vocabulary).slice(0, Math.min(5, vocabulary.length))
    exercises.push(makeMatching(matchItems))
  }

  return shuffle(exercises)
}

function pickMcType(vocabulary) {
  const types = ['mc-meaning', 'mc-yale', 'mc-characters']
  // Only include jyutping quiz if items have jyutping
  if (vocabulary.some((v) => v.jyutping)) types.push('mc-jyutping')
  return types[Math.floor(Math.random() * types.length)]
}

function makeFlashcard(item) {
  return {
    type: 'flashcard',
    id: `fc-${item.id}`,
    item,
  }
}

function makeMC(type, item, pool) {
  let prompt, promptLabel, answerField, promptDisplay

  switch (type) {
    case 'mc-meaning':
      promptLabel = 'What does this mean?'
      promptDisplay = { characters: item.characters, yale: item.yale }
      answerField = 'english'
      break
    case 'mc-yale':
      promptLabel = 'Which Yale romanization is correct?'
      promptDisplay = { english: item.english }
      answerField = 'yale'
      break
    case 'mc-characters':
      promptLabel = 'Which characters match?'
      promptDisplay = { english: item.english, yale: item.yale }
      answerField = 'characters'
      break
    case 'mc-jyutping':
      promptLabel = 'Which Jyutping matches this Yale?'
      promptDisplay = { characters: item.characters, yale: item.yale }
      answerField = 'jyutping'
      break
    default:
      promptLabel = 'What does this mean?'
      promptDisplay = { characters: item.characters, yale: item.yale }
      answerField = 'english'
  }

  const correctAnswer = item[answerField]
  const distractors = pickDistractors(pool, item, answerField, 3)

  // Ensure we have enough unique distractors
  const uniqueDistractors = [...new Set(distractors)].filter((d) => d !== correctAnswer).slice(0, 3)

  const choices = shuffle([correctAnswer, ...uniqueDistractors])

  return {
    type: 'mc',
    subtype: type,
    id: `mc-${type}-${item.id}`,
    item,
    promptLabel,
    promptDisplay,
    answerField,
    correctAnswer,
    choices,
  }
}

function makeMatching(items) {
  return {
    type: 'matching',
    id: `match-${items.map((i) => i.id).join('-')}`,
    items,
  }
}

export function calcStars(correctCount, totalCount) {
  const pct = correctCount / totalCount
  if (pct >= 0.9) return 3
  if (pct >= 0.7) return 2
  if (pct >= 0.5) return 1
  return 0
}

export function calcXP(correctCount, totalCount, stars) {
  const base = correctCount * 5
  const bonus = stars === 3 ? 30 : stars === 2 ? 15 : stars === 1 ? 5 : 0
  return base + bonus
}
