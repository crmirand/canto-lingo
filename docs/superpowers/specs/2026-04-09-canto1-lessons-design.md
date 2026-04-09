# Canto1 Class Materials → Lessons Design

**Date:** 2026-04-09  
**Branch:** `claude/cantonese-learning-game-IfEBj`  
**Deploy target:** `gh-pages` via `npm run deploy`

---

## Overview

Convert three class materials from `/Users/chrismiranda/Downloads/Canto1` into app lessons,
grouped under a new Unit 2. Then deploy.

---

## Unit Structure

### New: Unit 2 — Culture & Context | 文化與語境
Added to `src/data/index.js` alongside Unit 0 and Unit 1.

| File | ID | Title | Type | Items |
|---|---|---|---|---|
| `lesson-04.js` | `lesson-04` | Written vs. Spoken Cantonese | vocabulary | 18 |
| `lesson-05.js` | `lesson-05` | Qingming Festival 清明節 | vocabulary | 19 |
| `lesson-06.js` | `lesson-06` | About Cantonese | reference | sections |

---

## Lesson 04 — Written vs. Spoken Cantonese

**Source:** `Cantonese 101.docx` — 18-row comparison table  
**Schema:** Standard vocabulary schema + added `written` field on each item  
**Fields per item:** `id`, `characters` (spoken form), `written` (written form), `yale`, `jyutping`, `english`, `notes` (sample sentence)

Vocabulary pairs (spoken → written):
1. 嘅 → 的 (possessive particle, "de")
2. 仲 → 還 (also/still)
3. 唔好 → 不要 (don't)
4. 佢 → 他/她/它 (he/she/it)
5. 點 → 怎麼 (how)
6. 而家 → 現在 (now)
7. 呢 → 這 (this)
8. 係 → 是 (to be)
9. 嚟 → 來 (to come)
10. 食 → 吃 (to eat)
11. 俾 → 給 (to give)
12. 郁 → 動 (to move)
13. 冇 → 沒有 (to not have)
14. 攞 → 拿 (to take/pick up)
15. 一齊 → 一起 (together)
16. 好 → 很 (very)
17. 乜/咩 → 什麼 (what)
18. 尋日 → 昨天 (yesterday)

---

## Lesson 05 — Qingming Festival 清明節

**Source:** `清明节 Vocabulary (1).docx` — 19-word student worksheet (characters only; romanization/English filled from knowledge)  
**Schema:** Standard vocabulary schema with cultural `notes` on each item

Vocabulary (characters / Yale / Jyutping / English):
1. 清明節 / Chīng Mìhng Jit / cing1 ming4 zit3 / Qingming Festival (Tomb Sweeping Day)
2. 傳統 / Chyùhn Túng / cyun4 tung2 / tradition
3. 節日 / Jit Yaht / zit3 jat6 / festival / holiday
4. 拜山 / Baai Sāan / baai3 saan1 / to visit graves (lit. "worship the mountain")
5. 掃墓 / Sóu Mouh / sou3 mou6 / to sweep/clean the grave
6. 拜祭 / Baai Jai / baai3 zai3 / to offer worship, pay respects
7. 祖先 / Jóu Sīn / zou2 sin1 / ancestors
8. 先人 / Sīn Yàhn / sin1 jan4 / the deceased / departed ancestors
9. 拜祖先 / Baai Jóu Sīn / baai3 zou2 sin1 / to worship one's ancestors
10. 上香 / Séuhng Hēung / soeng5 hoeng1 / to offer incense
11. 裝香 / Jōng Hēung / zong1 hoeng1 / to prepare/light incense sticks
12. 敬酒 / Ging Jáu / ging3 zau2 / to offer wine / pour a toast
13. 燒衣 / Sīu Yī / siu1 ji1 / to burn paper offerings (joss paper)
14. 祭品 / Jai Bán / zai3 ban2 / offerings / sacrificial items
15. 鮮花 / Sīn Fā / sin1 faa1 / fresh flowers
16. 踏青 / Daahp Chīng / daap6 cing1 / spring outing / walking in nature
17. 郊遊 / Gāau Yàuh / gaau1 jau4 / countryside excursion / outing
18. 青糰 / Chīng Tyùhn / cing1 tyun4 / green glutinous rice ball (Qingming food)
19. 清明粿 / Chīng Mìhng Gwó / cing1 ming4 gwo2 / Qingming rice cake

---

## Lesson 06 — About Cantonese (Reference)

**Source:** `Cantonese Language Brainstorm Q&A.docx` + `Comparison…Links.docx`  
**Schema:** `type: 'reference'`, `vocabulary: []`, `sections: [...]` — same pattern as `lesson-intro`

Sections:
1. **Where is Cantonese spoken?** (text) — Guangdong province, HK, Macau, diaspora; named 廣東話
2. **Is Cantonese a language or a dialect?** (text) — linguistic vs political definition, mutual unintelligibility with Mandarin
3. **Why learn Cantonese?** (text) — global diaspora, HK media, cultural access
4. **HK vs Guangzhou Cantonese** (text) — vocabulary differences, tone shifts, code-mixing

---

## Data Index Changes (`src/data/index.js`)

- Import `lesson04`, `lesson05`, `lesson06`
- Add to `allLessons` array
- Add Unit 2 object with `lessonIds: ['lesson-04', 'lesson-05', 'lesson-06']`

---

## Deployment

After committing:
```
npm run deploy
```
This builds via Vite and pushes `dist/` to the `gh-pages` branch.

---

## Out of Scope

- No changes to exercise generator, UI components, or existing lessons
- PDF files not readable without poppler — skipped
- Dictionary/resource links docs — skipped (no lesson content)
