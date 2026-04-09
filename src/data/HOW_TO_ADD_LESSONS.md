# How to add class materials

## 1. Create a new lesson file

Copy `lessons/lesson-01.js` as a starting point and save it as e.g. `lessons/lesson-04.js`.

Fill in the fields:

```js
export const lesson04 = {
  id: 'lesson-04',          // unique, kebab-case
  unit: 1,                  // which unit number
  order: 4,                 // display order within the unit
  title: 'At the Market',   // English title
  titleZh: '喺市場',         // Chinese title
  description: 'Buying fruit and vegetables',
  icon: '🥦',
  colorFrom: 'from-green-500',  // Tailwind gradient start
  colorTo:   'to-teal-400',    // Tailwind gradient end

  vocabulary: [
    {
      id: 'l04-01',             // unique across the whole app
      characters: '蘋果',
      yale: 'pìhng gwó',        // Yale with tone diacritics
      jyutping: 'ping4 gwo2',   // Jyutping with tone numbers
      english: 'Apple',
      notes: 'Optional extra note for students',
    },
    // ... more words
  ],
}
```

## 2. Register the lesson

Open `src/data/index.js` and:

```js
import { lesson04 } from './lessons/lesson-04.js'  // add this

export const allLessons = [lesson01, lesson02, lesson03, lesson04]  // add lesson04
```

If it belongs to an existing unit, add the id to that unit's `lessonIds` array.
To start a new unit, add a new entry to the `units` array.

## Yale tone mark quick reference

| Tone | Name        | Diacritic  | Example |
|------|-------------|------------|---------|
| 1    | High level  | macron ā   | sīk     |
| 2    | High rising | acute á    | sík     |
| 3    | Mid level   | (none)     | sik     |
| 4    | Low falling | grave à    | sìk     |
| 5    | Low rising  | caron ǎ    | sǐk     |
| 6    | Low level   | (none)+h   | sihk    |

Nasal syllables: ḿh (m4), ńg (ng5), m̄ (m1)

## Gradient colors available

`from-red-500 to-orange-400` · `from-blue-500 to-cyan-400` ·
`from-purple-500 to-pink-400` · `from-green-500 to-teal-400` ·
`from-yellow-500 to-amber-400` · `from-indigo-500 to-violet-400`
