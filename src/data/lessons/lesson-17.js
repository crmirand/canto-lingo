/**
 * Lesson 17: Numbers Extended
 * Source: Number （Yale）.pdf, Money and measure word.pdf
 *
 * Builds on Lesson 3 (1–10) with compound numbers, the 兩/二 distinction,
 * and large place values up to 萬.
 */

export const lesson17 = {
  id: 'lesson-17',
  unit: 6,
  order: 17,
  title: 'Numbers Extended',
  titleZh: '數字進階',
  description: 'Compound numbers, tens, hundreds, thousands, and the 兩 vs 二 distinction',
  icon: '🔢',
  colorFrom: 'from-indigo-500',
  colorTo: 'to-blue-400',

  vocabulary: [
    {
      id: 'l17-01',
      characters: '十一',
      yale: 'sahp yāt',
      jyutping: 'sap6 jat1',
      english: 'Eleven (11)',
      notes: 'Numbers 11–19 follow the pattern 十 + digit: 十二 (12), 十三 (13), up to 十九 (19). No new words — just combine 十 with any of the digits from Lesson 3.',
    },
    {
      id: 'l17-02',
      characters: '二十',
      yale: 'yih sahp',
      jyutping: 'ji6 sap6',
      english: 'Twenty (20)',
      notes: 'Tens from 20–90: digit + 十. 三十 (30), 四十 (40), 五十 (50), 六十 (60), 七十 (70), 八十 (80), 九十 (90). Note the reversed order from the teens: 十二 = 12, but 二十 = 20.',
    },
    {
      id: 'l17-03',
      characters: '二十一',
      yale: 'yih sahp yāt',
      jyutping: 'ji6 sap6 jat1',
      english: 'Twenty-one (21)',
      notes: 'Two-digit numbers combine tens + ones: 二十三 (23), 七十八 (78), 九十九 (99). No connecting word is needed between the tens and ones digits.',
    },
    {
      id: 'l17-04',
      characters: '廿',
      yale: 'yah',
      jyutping: 'jaa6',
      english: 'Twenty (informal shorthand)',
      notes: '廿 is a traditional shorthand character for 20 often seen on market price signs, calendars, and handwritten notes. 廿三 instead of 二十三. Also: 卅 (sāa, 30) and 卌 (sei, 40) exist but are rare.',
    },
    {
      id: 'l17-05',
      characters: '兩',
      yale: 'léuhng',
      jyutping: 'loeng5',
      english: 'Two (before measure words)',
      notes: 'Critical distinction: 兩 is used directly before measure words — 兩個人 (two people), 兩杯茶 (two cups of tea). Use 二 (yih) only in counting sequences and compound numbers like 十二 or 二十. Never say *二個人.',
    },
    {
      id: 'l17-06',
      characters: '一百',
      yale: 'yāt baak',
      jyutping: 'jat1 baak3',
      english: 'One hundred (100)',
      notes: 'Amounts 101–199 require 零 (lìhng) when the tens digit is zero: 一百零五 = 105. When the tens digit is non-zero, no 零 is needed: 一百二十 = 120. 一百 is also written as just 百 informally.',
    },
    {
      id: 'l17-07',
      characters: '一千',
      yale: 'yāt chīn',
      jyutping: 'jat1 cin1',
      english: 'One thousand (1,000)',
      notes: '千 (chīn) = thousand. 三千五百 = 3,500. When hundreds are zero, 零 fills the gap: 一千零二十 = 1,020. In fast speech, 一千 may drop the 一: 千幾蚊 = a thousand-odd dollars.',
    },
    {
      id: 'l17-08',
      characters: '一萬',
      yale: 'yāt maahn',
      jyutping: 'jat1 maan6',
      english: 'Ten thousand (10,000)',
      notes: 'Chinese groups numbers in 萬 (10,000s), not thousands. One million = 一百萬 (one hundred ten-thousands). This trips up English speakers: 三萬 = 30,000, not 3,000.',
    },
    {
      id: 'l17-09',
      characters: '零',
      yale: 'lìhng',
      jyutping: 'ling4',
      english: 'Zero; gap-filler in compound numbers',
      notes: '零 has two roles: (1) the digit 0, and (2) a linking word inside larger numbers when a middle digit is zero — 一千零三 (1,003), 五百零一 (501). Without 零, listeners might miscount the place values.',
    },
    {
      id: 'l17-10',
      characters: '一百零五',
      yale: 'yāt baak lìhng ńgh',
      jyutping: 'jat1 baak3 ling4 ng5',
      english: 'One hundred and five (105)',
      notes: 'Full example showing 零 in action. Compare: 一百二十五 (125) — no 零 needed when tens are non-zero. The rule: use 零 whenever a zero digit separates larger and smaller place values.',
    },
  ],
}
