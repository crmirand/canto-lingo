/**
 * Lesson 06: About Cantonese (Reference)
 * Source: Cantonese Language Brainstorm Q&A.docx
 *         Comparison between Guangzhou vs HK Cantonese Links.docx
 *
 * Reference lesson — no vocabulary items, renders sections instead.
 * Same schema as lesson-intro.js.
 */

export const lesson06 = {
  id: 'lesson-06',
  unit: 2,
  order: 6,
  type: 'reference',
  title: 'About Cantonese',
  titleZh: '關於廣東話',
  description: 'Language background, dialects, and why Cantonese matters',
  icon: '🗺️',
  colorFrom: 'from-amber-500',
  colorTo: 'to-yellow-400',

  vocabulary: [],

  sections: [
    {
      id: 'where-spoken',
      type: 'text',
      title: 'Where is Cantonese spoken?',
      paragraphs: [
        'Cantonese (廣東話 gwóng dūng wá) is spoken natively by approximately 85 million people. Its heartland is Guangdong province in southern China, but it is also the dominant spoken language of Hong Kong and Macau.',
        'Beyond China, large Cantonese-speaking diaspora communities exist in Southeast Asia (especially Malaysia, Singapore, and Vietnam), North America (particularly San Francisco, Vancouver, and New York), the United Kingdom, and Australia. Historically, most Chinese immigrants to these countries came from Guangdong, so Cantonese has been the lingua franca of overseas Chinese communities for generations.',
        'Besides 廣東話, Cantonese is also called 粵語 (Jyut6 Jyu5 / Yuht Yúh) — the more formal linguistic name — and 白話 (baak6 waa6 / baak wá), meaning "plain speech," used in Guangdong.',
      ],
    },
    {
      id: 'language-or-dialect',
      type: 'text',
      title: 'Is Cantonese a language or a dialect?',
      paragraphs: [
        'A dialect is traditionally defined as a variety of a language that is mutually intelligible with other varieties. By this definition, Cantonese and Mandarin are not mutually intelligible — a Cantonese speaker and a Mandarin speaker cannot understand each other through speech alone. This means Cantonese functions as a separate language by linguistic criteria.',
        'Politically, however, China classifies Cantonese as a 方言 (fōng yìhn / regional dialect) of Chinese, with Mandarin (普通話) as the official national language. This classification is driven by policy and cultural unity, not by linguistics.',
        'The distinction matters for learners: Cantonese has its own grammar, colloquial vocabulary, and written characters that differ substantially from Mandarin. Knowing Mandarin gives you shared written characters and some shared formal vocabulary — but spoken Cantonese is a genuinely different system to learn.',
      ],
    },
    {
      id: 'why-learn',
      type: 'text',
      title: 'Why learn Cantonese?',
      paragraphs: [
        'From a global perspective, Cantonese is one of the most widely spoken Chinese varieties outside of China. It is the language of Hong Kong\'s film, music, and media industries — the source of Kung Fu movies, Cantopop, and much of what the world associates with "Chinese culture" in the 20th century.',
        'Cantonese is also the language of the majority of overseas Chinese communities established before the 1990s. Learning it opens doors to multigenerational diaspora families, heritage conversations, and community connections across the globe.',
        'Within Guangdong — one of China\'s most economically important provinces — Cantonese remains the dominant spoken language in daily life, business, and social contexts, even as Mandarin is used officially.',
      ],
    },
    {
      id: 'hk-vs-guangzhou',
      type: 'text',
      title: 'Hong Kong vs. Guangzhou Cantonese',
      paragraphs: [
        'Hong Kong Cantonese and Guangzhou (Guangdong mainland) Cantonese are mutually intelligible and share the same core grammar and most vocabulary. However, differences exist in pronunciation, tone, and especially vocabulary.',
        'Pronunciation: Some consonants and vowels have shifted in Guangzhou Cantonese, and there is ongoing tone merger — particularly tones 3 and 6, and tones 1 and 4 — among younger Guangzhou speakers. Hong Kong Cantonese generally preserves the full 6-tone system more consistently.',
        'Vocabulary: Hong Kong Cantonese has absorbed substantial English loanwords (e.g. 巴士 bā sí for "bus," 的士 dīk sí for "taxi") and uses many terms that differ from mainland equivalents. Guangzhou Cantonese has been influenced more by Mandarin vocabulary in recent decades.',
        'Register: Hong Kong Cantonese frequently code-switches between Cantonese and English, especially in professional and urban contexts. This course focuses on Hong Kong Cantonese as the prestige and most-documented variety.',
      ],
    },
    {
      id: 'written-vs-spoken',
      type: 'text',
      title: 'Written vs. Spoken Cantonese',
      paragraphs: [
        'Spoken Cantonese and formal written Chinese are significantly different. When Cantonese speakers write formally — in newspapers, official documents, academic work — they write in Standard Written Chinese, which is based on Mandarin grammar and vocabulary. Mandarin speakers write as they speak; Cantonese speakers generally do not.',
        'Colloquial written Cantonese does exist — in text messages, social media, informal chat, and entertainment subtitles. It uses Cantonese-specific characters (like 係, 唔, 喺, 嘅) and Cantonese grammar. But it is not used in formal contexts.',
        'For learners, this means two parallel tracks: learning to speak and understand colloquial Cantonese, and learning to read Traditional Chinese characters (which are shared with formal written Cantonese, Mandarin, Taiwanese, etc.). Both tracks reinforce each other.',
      ],
    },
  ],
}
