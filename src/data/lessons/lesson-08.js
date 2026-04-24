/**
 * Lesson 08: Yale Initials & Finals
 * Source: Yale Romanization.pdf (Modern Cantonese Book I — Siu-lun Lee)
 *
 * Reference lesson covering the full Yale phonological inventory.
 * Uses initial-grid and final-grid section types from ReferenceLesson.jsx.
 */

export const lesson08 = {
  id: 'lesson-08',
  unit: 3,
  order: 8,
  type: 'reference',
  title: 'Yale Initials & Finals',
  titleZh: '耶魯聲母韻母',
  description: 'Complete Yale romanization: consonant initials and vowel finals',
  icon: '🔤',
  colorFrom: 'from-indigo-500',
  colorTo: 'to-blue-400',

  vocabulary: [],

  sections: [
    {
      id: 'intro',
      type: 'text',
      title: 'Yale Romanization Overview',
      paragraphs: [
        'Yale romanization was developed in the 1960s for English-speaking learners. It represents Cantonese sounds using familiar English spelling conventions, making it easier to read aloud without prior phonetics training.',
        'Every Cantonese syllable consists of an optional initial consonant (聲母) followed by a final (韻母). Finals contain the vowel nucleus and may end in a nasal (-m, -n, -ng) or a stop (-p, -t, -k). Tones are marked with diacritics on the main vowel.',
        'This page covers all 19 initials and the complete set of finals grouped by their main vowel. Cross-reference with Lesson 09 for the special behaviour of stop-final syllables (entering tones 入聲).',
      ],
    },
    {
      id: 'initials',
      type: 'initial-grid',
      title: 'Consonant Initials 聲母',
      subtitle: 'Yale p/b, t/d, k/g pairs are aspirated vs unaspirated — NOT voiced vs voiceless as in English.',
      initials: [
        // Stops — aspirated
        { yale: 'p',  ipa: 'pʰ', exChar: '破', exYale: 'poh',  exEng: 'to break'    },
        { yale: 'b',  ipa: 'p',  exChar: '波', exYale: 'bō',   exEng: 'ball'         },
        { yale: 't',  ipa: 'tʰ', exChar: '拖', exYale: 'tō',   exEng: 'to drag'      },
        { yale: 'd',  ipa: 't',  exChar: '多', exYale: 'dō',   exEng: 'many'         },
        { yale: 'k',  ipa: 'kʰ', exChar: '咳', exYale: 'kat',  exEng: 'to cough'     },
        { yale: 'g',  ipa: 'k',  exChar: '哥', exYale: 'gō',   exEng: 'elder brother'},
        { yale: 'kw', ipa: 'kʷʰ',exChar: '誇', exYale: 'kwā',  exEng: 'to praise'    },
        { yale: 'gw', ipa: 'kʷ', exChar: '掛', exYale: 'gwā',  exEng: 'to hang'      },
        // Nasals
        { yale: 'm',  ipa: 'm',  exChar: '咩', exYale: 'mē',   exEng: 'baa (sheep)'  },
        { yale: 'n',  ipa: 'n',  exChar: '呢', exYale: 'nī',   exEng: 'this'         },
        { yale: 'ng', ipa: 'ŋ',  exChar: '鵝', exYale: 'ngòh', exEng: 'goose'        },
        // Fricatives & affricates
        { yale: 'f',  ipa: 'f',  exChar: '夫', exYale: 'fū',   exEng: 'husband'      },
        { yale: 's',  ipa: 's',  exChar: '梳', exYale: 'sō',   exEng: 'comb'         },
        { yale: 'h',  ipa: 'h',  exChar: '夏', exYale: 'hah',  exEng: 'summer'       },
        { yale: 'ch', ipa: 'tsʰ',exChar: '車', exYale: 'chē',  exEng: 'vehicle'      },
        { yale: 'j',  ipa: 'ts', exChar: '遮', exYale: 'jē',   exEng: 'umbrella'     },
        // Lateral
        { yale: 'l',  ipa: 'l',  exChar: '罅', exYale: 'lā',   exEng: 'gap/crack'    },
        // Semi-vowels
        { yale: 'y',  ipa: 'j',  exChar: '夜', exYale: 'yeh',  exEng: 'night'        },
        { yale: 'w',  ipa: 'w',  exChar: '蛙', exYale: 'wā',   exEng: 'frog'         },
      ],
    },
    {
      id: 'aspiration-note',
      type: 'text',
      title: 'A Note on Aspiration',
      paragraphs: [
        'In English, p/b, t/d, k/g differ by voicing (vocal cords vibrate for b/d/g). In Cantonese, the distinction is aspiration — a puff of air.',
        'Yale p, t, k, kw are aspirated (strong puff of air, like English "pin", "top", "kin"). Yale b, d, g, gw are unaspirated (no puff, like English "spin", "stop", "skin").',
        'Test it: hold a piece of paper in front of your mouth. 破 (poh) should flutter the paper; 波 (bō) should not. This contrast is critical — 怕 (pah, afraid) vs 爸 (bā, dad) differ only by aspiration.',
      ],
    },
    {
      id: 'finals',
      type: 'final-grid',
      title: 'Vowel Finals 韻母',
      subtitle: 'Finals ending in -p, -t, -k are entering tones (short, stopped). Finals ending in -m, -n, -ng are nasal. All others are open.',
      groups: [
        {
          label: 'Long A — aa-',
          finals: [
            { yale: 'aa',   exChar: '蝦', exEng: 'shrimp'    },
            { yale: 'aai',  exChar: '買', exEng: 'to buy'     },
            { yale: 'aau',  exChar: '包', exEng: 'bun'        },
            { yale: 'aam',  exChar: '三', exEng: 'three'      },
            { yale: 'aan',  exChar: '慢', exEng: 'slow'       },
            { yale: 'aang', exChar: '生', exEng: 'to be born' },
            { yale: 'aap',  exChar: '鴨', exEng: 'duck'       },
            { yale: 'aat',  exChar: '八', exEng: 'eight'      },
            { yale: 'aak',  exChar: '窄', exEng: 'narrow'     },
          ],
        },
        {
          label: 'Short A — a-',
          finals: [
            { yale: 'ai',  exChar: '西', exEng: 'west'        },
            { yale: 'au',  exChar: '狗', exEng: 'dog'         },
            { yale: 'am',  exChar: '心', exEng: 'heart'       },
            { yale: 'an',  exChar: '真', exEng: 'real'        },
            { yale: 'ang', exChar: '燈', exEng: 'lamp'        },
            { yale: 'ap',  exChar: '汁', exEng: 'juice'       },
            { yale: 'at',  exChar: '七', exEng: 'seven'       },
            { yale: 'ak',  exChar: '塞', exEng: 'blocked'     },
          ],
        },
        {
          label: 'E vowel — e-',
          finals: [
            { yale: 'e',    exChar: '車', exEng: 'vehicle'    },
            { yale: 'ei',   exChar: '機', exEng: 'machine'    },
            { yale: 'eu',   exChar: '靴', exEng: 'boot'       },
            { yale: 'eng',  exChar: '鏡', exEng: 'mirror'     },
            { yale: 'ek',   exChar: '錫', exEng: 'to kiss'    },
            { yale: 'eung', exChar: '香', exEng: 'fragrant'   },
            { yale: 'euk',  exChar: '腳', exEng: 'foot/leg'   },
            { yale: 'eui',  exChar: '推', exEng: 'to push'    },
            { yale: 'eun',  exChar: '樽', exEng: 'bottle'     },
            { yale: 'eut',  exChar: '恤', exEng: 'shirt'      },
          ],
        },
        {
          label: 'I vowel — i-',
          finals: [
            { yale: 'i',   exChar: '啲', exEng: 'some'        },
            { yale: 'iu',  exChar: '燒', exEng: 'to burn'     },
            { yale: 'im',  exChar: '尖', exEng: 'sharp'       },
            { yale: 'in',  exChar: '鮮', exEng: 'fresh'       },
            { yale: 'ing', exChar: '星', exEng: 'star'        },
            { yale: 'ip',  exChar: '貼', exEng: 'to stick'    },
            { yale: 'it',  exChar: '鐵', exEng: 'iron/steel'  },
            { yale: 'ik',  exChar: '識', exEng: 'to know'     },
          ],
        },
        {
          label: 'O vowel — o-',
          finals: [
            { yale: 'o',   exChar: '梳', exEng: 'comb'        },
            { yale: 'oi',  exChar: '愛', exEng: 'love'        },
            { yale: 'ou',  exChar: '租', exEng: 'to rent'     },
            { yale: 'on',  exChar: '乾', exEng: 'dry'         },
            { yale: 'ong', exChar: '倉', exEng: 'warehouse'   },
            { yale: 'ot',  exChar: '喝', exEng: 'to drink (formal)' },
            { yale: 'ok',  exChar: '學', exEng: 'to study'    },
          ],
        },
        {
          label: 'U vowel — u-',
          finals: [
            { yale: 'u',   exChar: '夫', exEng: 'husband'     },
            { yale: 'ui',  exChar: '杯', exEng: 'cup'         },
            { yale: 'un',  exChar: '搬', exEng: 'to move'     },
            { yale: 'ung', exChar: '鐘', exEng: 'clock'       },
            { yale: 'ut',  exChar: '活', exEng: 'alive'       },
            { yale: 'uk',  exChar: '六', exEng: 'six'         },
          ],
        },
        {
          label: 'YU vowel — yu-',
          finals: [
            { yale: 'yu',  exChar: '書', exEng: 'book'        },
            { yale: 'yun', exChar: '酸', exEng: 'sour'        },
            { yale: 'yut', exChar: '雪', exEng: 'snow'        },
          ],
        },
      ],
    },
  ],
}
