/**
 * Lesson 12: Extended Family
 * Source: Class (family tree session — grandparents, aunts/uncles, cousins)
 *
 * Cantonese has highly specific family terminology, distinguishing:
 * - Paternal vs maternal side
 * - Elder vs younger (for siblings and cousins)
 * - Gender
 */

export const lesson12 = {
  id: 'lesson-12',
  unit: 4,
  order: 12,
  title: 'Extended Family',
  titleZh: '大家庭',
  description: 'Grandparents, aunts, uncles, and cousins — paternal vs maternal',
  icon: '🌳',
  colorFrom: 'from-amber-600',
  colorTo: 'to-orange-400',

  vocabulary: [
    // --- GRANDPARENTS (PATERNAL) ---
    {
      id: 'l12-01',
      characters: '爺爺',
      yale: 'yèh yèh',
      jyutping: 'je4 je4',
      english: "Paternal grandfather (Dad's dad)",
      notes: 'Also called 阿爺 (a yéh) casually. 爺 specifically refers to the father\'s father. Do NOT use for maternal grandfather.',
    },
    {
      id: 'l12-02',
      characters: '嫲嫲',
      yale: 'màh màh',
      jyutping: 'maa4 maa4',
      english: "Paternal grandmother (Dad's mom)",
      notes: 'Also called 阿嫲 (a màh). Specifically the father\'s mother. Note: 嫲嫲 has the same tones (both tone 4), unlike 媽媽 (4+1).',
    },
    // --- GRANDPARENTS (MATERNAL) ---
    {
      id: 'l12-03',
      characters: '外公',
      yale: 'ngoih gūng',
      jyutping: 'ngoi6 gung1',
      english: "Maternal grandfather (Mom's dad)",
      notes: 'Also 阿公 (a gūng) or 公公. 外 means "outside/maternal side." Completely different from 爺爺 — using the wrong one is a significant error.',
    },
    {
      id: 'l12-04',
      characters: '外婆',
      yale: 'ngoih pòh',
      jyutping: 'ngoi6 po4',
      english: "Maternal grandmother (Mom's mom)",
      notes: 'Also 阿婆 (a pòh). 婆 means "old woman." Note: 阿婆 can also refer to any elderly woman, so context matters.',
    },
    // --- UNCLES ---
    {
      id: 'l12-05',
      characters: '伯父',
      yale: 'baak fuh',
      jyutping: 'baak3 fu6',
      english: "Dad's older brother (paternal uncle, senior)",
      notes: 'Called 伯伯 (baak baak) by children. 伯 specifically means "father\'s elder brother." One of the most specific kinship terms in Chinese.',
    },
    {
      id: 'l12-06',
      characters: '叔父',
      yale: 'sūk fuh',
      jyutping: 'suk1 fu6',
      english: "Dad's younger brother (paternal uncle, junior)",
      notes: 'Called 叔叔 (sūk sūk) by children. 叔 = father\'s younger brother. The elder/younger distinction is mandatory — there is no generic word for "paternal uncle."',
    },
    {
      id: 'l12-07',
      characters: '舅父',
      yale: 'kàuh fuh',
      jyutping: 'kau5 fu6',
      english: "Mom's brother (maternal uncle)",
      notes: 'Called 舅舅 (kàuh kàuh) by children. 舅 = mother\'s brother. Unlike paternal uncles, there is no elder/younger distinction for maternal uncles in standard usage.',
    },
    // --- AUNTS-IN-LAW / UNCLES' WIVES (PATERNAL) ---
    {
      id: 'l12-05b',
      characters: '伯娘',
      yale: 'baak nèuhng',
      jyutping: 'baak3 noeng4',
      english: "Wife of Dad's older brother (paternal aunt by marriage, senior)",
      notes: '伯 = dad\'s elder brother; 娘 = woman/wife. 伯娘 is the wife of 伯父. Not to be confused with 伯父\'s blood relationship — this is specifically the spouse.',
    },
    {
      id: 'l12-06b',
      characters: '阿婶',
      yale: 'a sám',
      jyutping: 'aa3 sam2',
      english: "Wife of Dad's younger brother (paternal aunt by marriage, junior)",
      notes: '叔 = dad\'s younger brother; 婶 = his wife. Children address her as 阿婶 (a sám). Parallel to 叔父 just as 伯娘 parallels 伯父.',
    },
    // --- AUNTS ---
    {
      id: 'l12-08',
      characters: '姑姐',
      yale: 'gū jé',
      jyutping: 'gu1 ze2',
      english: "Dad's sister (paternal aunt)",
      notes: 'Also 姑媽 (gū māh) when married or older. 姑 always refers to the father\'s sister. A uniquely Cantonese/southern Chinese term — very common in HK.',
    },
    {
      id: 'l12-09',
      characters: '姨媽',
      yale: 'yī māh',
      jyutping: 'ji4 maa1',
      english: "Mom's sister (maternal aunt)",
      notes: 'Also 阿姨 (a yī) in more casual speech. 姨 = mother\'s sister. Do not confuse with 姑姐 — the paternal/maternal distinction is important.',
    },
    // --- UNCLE'S HUSBANDS / AUNTS' HUSBANDS ---
    {
      id: 'l12-08b',
      characters: '姑丈',
      yale: 'gū jéung',
      jyutping: 'gu1 zoeng3',
      english: "Husband of Dad's sister (uncle by marriage, paternal)",
      notes: '姑 = dad\'s sister (姑姐); 丈 = husband (as in 丈夫). 姑丈 is the husband of your 姑姐. Used in Cantonese-speaking families — notably more specific than English "uncle."',
    },
    {
      id: 'l12-09b',
      characters: '舅母',
      yale: 'kàuh móuh',
      jyutping: 'kau5 mou5',
      english: "Wife of Mom's brother (aunt by marriage, maternal)",
      notes: '舅 = mom\'s brother (舅父); 母 = mother/woman. 舅母 is the wife of your 舅父. The maternal-side in-law parallel to 伯娘/阿婶 on the paternal side.',
    },
    // --- COUSINS (PATERNAL 堂) ---
    {
      id: 'l12-10',
      characters: '堂兄',
      yale: 'tòhng hīng',
      jyutping: 'tong4 hing1',
      english: 'Paternal male cousin (older than you)',
      notes: '堂 marks paternal-side cousins (same surname). 兄 = older brother/male. So 堂兄 = "older male cousin on dad\'s side."',
    },
    {
      id: 'l12-11',
      characters: '堂弟',
      yale: 'tòhng daih',
      jyutping: 'tong4 dai6',
      english: 'Paternal male cousin (younger than you)',
      notes: '堂 (paternal) + 弟 (younger male). Note: the elder/younger distinction is based on YOUR age relative to the cousin, not their birth order among siblings.',
    },
    {
      id: 'l12-12',
      characters: '堂姐',
      yale: 'tòhng jé',
      jyutping: 'tong4 ze2',
      english: 'Paternal female cousin (older than you)',
      notes: '堂 (paternal) + 姐 (older female). Together: older female cousin on your father\'s side.',
    },
    {
      id: 'l12-13',
      characters: '堂妹',
      yale: 'tòhng muih',
      jyutping: 'tong4 mui6',
      english: 'Paternal female cousin (younger than you)',
      notes: '堂 (paternal) + 妹 (younger female). The four 堂 terms cover all four gender×age combinations for paternal cousins.',
    },
    // --- COUSINS (MATERNAL 表) ---
    {
      id: 'l12-14',
      characters: '表兄',
      yale: 'bíu hīng',
      jyutping: 'biu2 hing1',
      english: 'Maternal male cousin (older than you)',
      notes: '表 marks maternal-side cousins (different surname). 表兄 = older male cousin on your mother\'s (or aunt\'s/uncle\'s) side.',
    },
    {
      id: 'l12-15',
      characters: '表弟',
      yale: 'bíu daih',
      jyutping: 'biu2 dai6',
      english: 'Maternal male cousin (younger than you)',
      notes: '表 (maternal) + 弟 (younger male). Maternal cousins include children of 舅父, 姨媽, 姑姐, or 叔父\'s wife\'s side.',
    },
    {
      id: 'l12-16',
      characters: '表姐',
      yale: 'bíu jé',
      jyutping: 'biu2 ze2',
      english: 'Maternal female cousin (older than you)',
      notes: '表 (maternal) + 姐 (older female). The 表 vs 堂 distinction maps to surname: 堂 cousins share your surname, 表 cousins do not.',
    },
    {
      id: 'l12-17',
      characters: '表妹',
      yale: 'bíu muih',
      jyutping: 'biu2 mui6',
      english: 'Maternal female cousin (younger than you)',
      notes: '表 (maternal) + 妹 (younger female). Summary pattern: 堂/表 + 兄/弟/姐/妹 = 8 specific cousin terms covering all gender×age×side combinations.',
    },
  ],
}
