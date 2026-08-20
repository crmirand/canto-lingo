/**
 * Lesson 19: Measure Words (Classifiers)
 * Source: Money and measure word.pdf (Unit 7: Counting Things, p. 45)
 *         Buying and Bargaining.pdf (貨品的叫法, p. 36)
 *
 * In Cantonese, a measure word (量詞) is required between a number or
 * demonstrative and a noun. Every noun has its own classifier — the best
 * approach is to learn them together with the noun.
 */

export const lesson19 = {
  id: 'lesson-19',
  unit: 6,
  order: 19,
  title: 'Measure Words',
  titleZh: '量詞',
  description: 'Classifiers required between numbers and nouns — essential Cantonese grammar',
  icon: '📏',
  colorFrom: 'from-emerald-500',
  colorTo: 'to-green-400',

  vocabulary: [
    {
      id: 'l19-01',
      characters: '個',
      yale: 'go',
      jyutping: 'go3',
      english: 'General classifier (persons, round objects, abstract things)',
      notes: '個 is the default classifier when in doubt. 一個人 (one person), 兩個問題 (two questions), 三個蘋果 (three apples). If you don\'t know the specific classifier, 個 is usually understood — but learning the correct one for each noun is ideal.',
    },
    {
      id: 'l19-02',
      characters: '條',
      yale: 'tìuh',
      jyutping: 'tiu4',
      english: 'Long, narrow things (fish, streets, pants, ties, rivers)',
      notes: '一條魚 (one fish), 一條褲 (one pair of trousers), 一條領帶 (one necktie), 一條街 (one street), 一條河 (one river). 條 is for things long and narrow in shape — or conceptually linear.',
    },
    {
      id: 'l19-03',
      characters: '件',
      yale: 'gihn',
      jyutping: 'gin6',
      english: 'Upper body clothing, matters, affairs',
      notes: '一件衫 (one shirt), 一件褸/大衣 (one coat), 一件事 (one matter/affair). 件 covers upper-body clothing and abstract "items" like tasks or events. Contrast 條 for lower-body clothing like trousers.',
    },
    {
      id: 'l19-04',
      characters: '隻',
      yale: 'jek',
      jyutping: 'zek3',
      english: 'Animals, ships, one item of a pair',
      notes: '一隻貓 (one cat), 一隻船 (one ship), 一隻鞋 (one shoe — just one). 隻 singles out one item from a natural pair. For the complete pair, use 對. 一隻手 = one hand (as opposed to the pair).',
    },
    {
      id: 'l19-05',
      characters: '對',
      yale: 'deui',
      jyutping: 'deoi3',
      english: 'Pairs (shoes, earrings, chopsticks, hands)',
      notes: '一對鞋 (a pair of shoes), 一對耳環 (a pair of earrings), 一對筷子 (a pair of chopsticks). 對 means the two items belong together as a complete set. Compare: 隻 (one of the pair) vs 對 (both together).',
    },
    {
      id: 'l19-06',
      characters: '張',
      yale: 'jēung',
      jyutping: 'zoeng1',
      english: 'Flat objects (paper, cards, chairs, tables, tickets)',
      notes: '一張紙 (one sheet of paper), 一張椅 (one chair), 一張票 (one ticket), 一張枱 (one table). The key feature is a flat surface — whether literally flat (paper) or having a flat top (table, chair).',
    },
    {
      id: 'l19-07',
      characters: '本',
      yale: 'bún',
      jyutping: 'bun2',
      english: 'Books, magazines, notebooks',
      notes: '一本書 (one book), 一本雜誌 (one magazine), 一本筆記簿 (one notebook). 本 is for bound publications. The character itself means "root/origin" — the spine of a book is its structural root.',
    },
    {
      id: 'l19-08',
      characters: '間',
      yale: 'gāan',
      jyutping: 'gaan1',
      english: 'Buildings, rooms, shops',
      notes: '一間屋 (one house), 一間房 (one room), 一間舖頭 (one shop), 一間餐廳 (one restaurant), 一間銀行 (one bank). 間 is the standard classifier for any enclosed space or building.',
    },
    {
      id: 'l19-09',
      characters: '杯',
      yale: 'būi',
      jyutping: 'bui1',
      english: 'Cups, glasses (for beverages)',
      notes: '一杯茶 (one cup of tea), 一杯水 (one glass of water), 一杯咖啡 (one cup of coffee). 杯 is a container classifier — the quantity is what the cup holds. The character 杯 itself means "cup."',
    },
    {
      id: 'l19-10',
      characters: '碗',
      yale: 'wún',
      jyutping: 'wun2',
      english: 'Bowls (for food)',
      notes: '一碗飯 (one bowl of rice), 一碗麵 (one bowl of noodles), 一碗湯 (one bowl of soup). Like 杯, 碗 is a container classifier. Essential for ordering food in Cantonese restaurants.',
    },
    {
      id: 'l19-11',
      characters: '支',
      yale: 'jī',
      jyutping: 'zi1',
      english: 'Cylindrical objects (pens, candles, cigarettes)',
      notes: '一支筆 (one pen), 一支蠟燭 (one candle), 一支唇膏 (one lipstick). 支 is for things that are long, thin, and rigid — cylindrical in shape. Also used for: 一支歌 (one song) in some contexts.',
    },
    {
      id: 'l19-12',
      characters: '副',
      yale: 'fu',
      jyutping: 'fu3',
      english: 'Sets of paired/complementary items (glasses, gloves)',
      notes: '一副眼鏡 (one pair of glasses), 一副手套 (one pair of gloves). 副 is for items that come as a matched set. Contrast 對 (which emphasises the twoness) vs 副 (which emphasises the completeness of the set).',
    },
  ],
}
