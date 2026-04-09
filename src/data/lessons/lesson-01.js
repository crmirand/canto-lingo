/**
 * Lesson 01: Greetings & Basic Expressions
 *
 * Yale romanization guide (tone marks on the vowel):
 *   Tone 1 – high level:    macron   ā ē ī ō ū  (e.g. sīk)
 *   Tone 2 – high rising:   acute    á é í ó ú  (e.g. sík)
 *   Tone 3 – mid level:     no mark  a e i o u  (e.g. sik)
 *   Tone 4 – low falling:   grave    à è ì ò ù  (e.g. sìk)
 *   Tone 5 – low rising:    v-mark   ǎ ě ǐ ǒ ǔ  (e.g. sǐk)
 *   Tone 6 – low level:     no mark + h suffix   (e.g. sihk)
 *
 * Jyutping uses numbers 1-6 after the syllable: nei5 hou2
 */

export const lesson01 = {
  id: 'lesson-01',
  unit: 1,
  order: 1,
  title: 'Greetings',
  titleZh: '打招呼',
  description: 'Basic greetings and polite expressions',
  icon: '👋',
  colorFrom: 'from-red-500',
  colorTo: 'to-orange-400',

  vocabulary: [
    {
      id: 'l01-01',
      characters: '你好',
      yale: 'néih hóu',
      jyutping: 'nei5 hou2',
      english: 'Hello / How are you',
      notes: 'Lit. "you good" — general greeting',
    },
    {
      id: 'l01-02',
      characters: '你好嗎',
      yale: 'néih hóu ma',
      jyutping: 'nei5 hou2 maa3',
      english: 'How are you? (question)',
      notes: '嗎 / ma turns it into a yes/no question',
    },
    {
      id: 'l01-03',
      characters: '我好好',
      yale: 'ngóh hóu hóu',
      jyutping: 'ngo5 hou2 hou2',
      english: 'I am very well',
      notes: 'The repeated 好 intensifies "good"',
    },
    {
      id: 'l01-04',
      characters: '唔該',
      yale: 'ḿh gōi',
      jyutping: 'm4 goi1',
      english: 'Thank you (for a service)',
      notes: 'Use when someone does something for you — also means "excuse me"',
    },
    {
      id: 'l01-05',
      characters: '多謝',
      yale: 'dō jeh',
      jyutping: 'do1 ze6',
      english: 'Thank you (for a gift)',
      notes: 'Use when receiving a gift or compliment',
    },
    {
      id: 'l01-06',
      characters: '唔緊要',
      yale: 'ḿh gán yiu',
      jyutping: 'm4 gan2 jiu3',
      english: "You're welcome / It doesn't matter",
    },
    {
      id: 'l01-07',
      characters: '對唔住',
      yale: 'deui ḿh jyuh',
      jyutping: 'deoi3 m4 zyu6',
      english: 'Sorry / I apologize',
      notes: 'Stronger apology than 唔該',
    },
    {
      id: 'l01-08',
      characters: '再見',
      yale: 'joi gin',
      jyutping: 'zoi3 gin3',
      english: 'Goodbye / See you again',
      notes: 'Lit. "again see"',
    },
    {
      id: 'l01-09',
      characters: '拜拜',
      yale: 'baai baai',
      jyutping: 'baai3 baai3',
      english: 'Bye-bye (casual)',
      notes: 'Very common informal farewell',
    },
    {
      id: 'l01-10',
      characters: '係',
      yale: 'haih',
      jyutping: 'hai6',
      english: 'Yes / Is / Am / Are',
      notes: 'The Cantonese copula — "to be"',
    },
    {
      id: 'l01-11',
      characters: '唔係',
      yale: 'ḿh haih',
      jyutping: 'm4 hai6',
      english: 'No / Is not',
      notes: '唔 is the Cantonese negation particle',
    },
    {
      id: 'l01-12',
      characters: '好',
      yale: 'hóu',
      jyutping: 'hou2',
      english: 'Good / Okay / Very',
      notes: 'Also used as an intensifier before adjectives',
    },
  ],
}
