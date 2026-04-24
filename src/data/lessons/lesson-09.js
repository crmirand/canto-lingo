/**
 * Lesson 09: Entering Tones 入聲
 * Source: 入声广东话.docx
 *
 * Reference lesson explaining syllables ending in -p, -t, -k stop consonants.
 */

export const lesson09 = {
  id: 'lesson-09',
  unit: 3,
  order: 9,
  type: 'reference',
  title: 'Entering Tones 入聲',
  titleZh: '入聲廣東話',
  description: 'Short, abrupt syllables ending in -p, -t, or -k',
  icon: '⚡',
  colorFrom: 'from-orange-500',
  colorTo: 'to-red-400',

  vocabulary: [],

  sections: [
    {
      id: 'what-is-entering-tone',
      type: 'text',
      title: 'What is the Entering Tone? 入聲 (yahp sēng)',
      paragraphs: [
        '入聲 (yahp sēng / jap6 sing1) means "entering tone." It refers to a category of Cantonese syllables that end with a stop consonant — specifically -p, -t, or -k. These syllables are short, sharp, and abrupt compared to regular open-syllable tones.',
        'In Cantonese, entering-tone syllables are a key feature that distinguishes the language from Mandarin, which lost its stop endings centuries ago. Mastering them is essential for clear Cantonese pronunciation.',
        'The entering tone is sometimes described as a "checked tone" in English-language linguistics — the airflow is stopped (or "checked") by the final consonant rather than flowing freely.',
      ],
    },
    {
      id: 'three-stop-endings',
      type: 'text',
      title: 'The Three Stop Endings',
      paragraphs: [
        '-p: The lips press together to stop the sound, then release without a puff of air. Like the "p" in "cap" held briefly. Example: 十 sahp (ten), 立 lahp (to stand), 合 hahp (to fit).',
        '-t: The tongue tip touches the roof of the mouth to stop airflow. Like the "t" in "cat" held briefly without releasing. Example: 七 chāt (seven), 一 yāt (one), 日 yaht (sun/day).',
        '-k: The back of the tongue rises to stop airflow at the soft palate. Like the "k" in "back" held briefly. Example: 六 luhk (six), 學 hohk (to study), 食 sihk (to eat).',
      ],
    },
    {
      id: 'tones-and-stops',
      type: 'text',
      title: 'Entering Tones and the Tone System',
      paragraphs: [
        'In Cantonese\'s six-tone system, stop-final syllables only occur in tones 1, 3, and 6. They cannot occur in tones 2, 4, or 5.',
        'Tone 1 (high level): e.g. 一 yāt (one), 激 gīk (to anger)',
        'Tone 3 (mid level): e.g. 識 sīk (to know), 色 sīk (colour)',
        'Tone 6 (low level): e.g. 食 sihk (to eat), 六 luhk (six), 學 hohk (to study)',
        'In Yale romanization, tone 6 stop-final syllables get the "-h" suffix just like regular tone 6, so you can identify them: sihk, luhk, hohk.',
      ],
    },
    {
      id: 'pronunciation-tips',
      type: 'text',
      title: 'Pronunciation Tips',
      paragraphs: [
        'Short and sharp: entering-tone syllables are noticeably shorter than open-syllable tones. Do not hold or lengthen them.',
        'No release burst: the final -p, -t, -k is unreleased in Cantonese (unlike English where you often release a small puff of air). The sound stops abruptly at the point of closure.',
        'Do not add a vowel: beginners sometimes add a schwa sound after the stop (e.g. saying "sahp-uh" instead of "sahp"). The consonant should remain unexploded.',
        'Practice by contrasting pairs: 事 (sih, matter — open syllable, tone 6) vs 食 (sihk, to eat — entering tone 6). Both are tone 6, but 食 ends with the -k closure.',
      ],
    },
    {
      id: 'common-examples',
      type: 'table',
      title: 'Common Entering-Tone Words',
      subtitle: 'These high-frequency words all have stop-final syllables',
      headers: ['Character', 'Yale', 'Jyutping', 'English', 'Stop'],
      rows: [
        ['一', 'yāt', 'jat1', 'one', '-t'],
        ['七', 'chāt', 'cat1', 'seven', '-t'],
        ['八', 'baat', 'baat3', 'eight', '-t'],
        ['十', 'sahp', 'sap6', 'ten', '-p'],
        ['百', 'baak', 'baak3', 'hundred', '-k'],
        ['食', 'sihk', 'sik6', 'to eat', '-k'],
        ['學', 'hohk', 'hok6', 'to study/learn', '-k'],
        ['識', 'sīk', 'sik1', 'to know; can', '-k'],
        ['日', 'yaht', 'jat6', 'day; sun', '-t'],
        ['月', 'yuht', 'jyut6', 'month; moon', '-t'],
        ['國', 'gwok', 'gwok3', 'country; nation', '-k'],
        ['色', 'sīk', 'sik1', 'colour', '-k'],
        ['合', 'hahp', 'hap6', 'to fit; to suit', '-p'],
        ['立', 'lahp', 'lap6', 'to stand', '-p'],
        ['的', 'dīk', 'dik1', 'taxi (from English "taxi")', '-k'],
      ],
    },
  ],
}
