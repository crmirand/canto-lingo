/**
 * Lesson 16: Adjective Predicates (Reference)
 * Source: Reference from Modern Cantonese Book I Ch1.pdf
 *
 * In Cantonese, adjectives can act directly as predicates —
 * no verb "to be" (係) is used before an adjective.
 * This reference covers the core grammar pattern and its
 * question/negative/intensifier forms.
 */

export const lesson16 = {
  id: 'lesson-16',
  unit: 5,
  order: 16,
  type: 'reference',
  title: 'Adjective Predicates',
  titleZh: '形容詞謂語',
  description: 'How adjectives work as predicates in Cantonese — no "to be" needed',
  icon: '📖',
  colorFrom: 'from-slate-500',
  colorTo: 'to-gray-400',

  sections: [
    {
      type: 'text',
      heading: 'Adjectives as Predicates',
      body: `In Cantonese, adjectives function directly as the predicate of a sentence — there is no need for the verb 係 (to be) between the subject and the adjective.

❌  Wrong:  我係高。 (I am tall.) — 係 before adjective is incorrect
✓   Right:  我好高。 (I am tall.) — use 好 as the affirmative marker

This is one of the most important structural differences from English. When you describe someone or something with an adjective, drop 係 entirely.`,
    },
    {
      type: 'text',
      heading: 'The Role of 好',
      body: `Before an adjective in an affirmative sentence, Cantonese requires the adverb 好 (hóu). In this context, 好 does not mean "very" — it is simply the grammatical marker that makes the predicate adjective construction well-formed.

Structure: Subject + 好 + Adjective

Examples:
• 你好高。 (You are tall.)
• 佢好靚。 (She is beautiful.)
• 今日好熱。 (Today is hot.)

To express actual intensification ("very"), use 好 twice or use 非常 (fēi sèuhng):
• 你好好高。 (You are very tall.)`,
    },
    {
      type: 'text',
      heading: 'Question Form: A-not-A',
      body: `To turn an adjective predicate into a yes/no question, use the A-not-A pattern: repeat the adjective with 唔 (not) in between.

Structure: Subject + Adjective + 唔 + Adjective + ？

Examples:
• 你高唔高？ (Are you tall?)
• 今日熱唔熱？ (Is today hot?)
• 佢靚唔靚？ (Is she pretty?)

Note: drop the 好 when forming the A-not-A question — 你好高唔高 is not standard.`,
    },
    {
      type: 'text',
      heading: 'Negative Form',
      body: `To negate an adjective predicate, place 唔 (not) before the adjective.

Structure: Subject + 唔 + Adjective

Examples:
• 我唔高。 (I am not tall.)
• 今日唔熱。 (Today is not hot.)
• 佢唔靚。 (She is not pretty.)

As with the question form, 好 is dropped in the negative. Only the affirmative uses 好 as a grammatical marker.`,
    },
    {
      type: 'table',
      heading: 'Summary: Three Forms',
      columns: ['Form', 'Structure', 'Example', 'English'],
      rows: [
        ['Affirmative', 'S + 好 + Adj', '我好高', 'I am tall'],
        ['Negative', 'S + 唔 + Adj', '我唔高', 'I am not tall'],
        ['Question (A-not-A)', 'S + Adj + 唔 + Adj', '你高唔高？', 'Are you tall?'],
      ],
    },
    {
      type: 'text',
      heading: 'Common Adjectives to Practice',
      body: `These adjectives follow the pattern above. Pair each with 好/唔/A-not-A:

高 (gōu) — tall         矮 (ngáai) — short
靚 (leng) — beautiful   醜 (cháu) — ugly
叻 (lēk) — clever       蠢 (chéun) — foolish
忙 (mòhng) — busy       閒 (hàahn) — free/leisure
熱 (yiht) — hot         凍 (dung) — cold
大 (daai) — big         細 (sai) — small`,
    },
  ],
}
