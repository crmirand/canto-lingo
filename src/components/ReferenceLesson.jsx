import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SpeakButton } from './SpeakButton.jsx'

export function ReferenceLesson({ lesson }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-20">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-800 text-sm font-medium mb-4 transition-colors"
      >
        <ArrowLeft size={16} /> Back
      </Link>

      {/* Header */}
      <div className={`rounded-2xl p-6 text-white bg-gradient-to-br ${lesson.colorFrom} ${lesson.colorTo} shadow-md mb-6`}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{lesson.icon}</span>
          <div>
            <h1 className="text-2xl font-extrabold">{lesson.title}</h1>
            <p className="font-chinese text-white/80">{lesson.titleZh}</p>
          </div>
        </div>
        <p className="text-white/80 text-sm mt-2">{lesson.description}</p>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-6">
        {lesson.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  )
}

function Section({ section }) {
  switch (section.type) {
    case 'text':
      return <TextSection section={section} />
    case 'table':
      return <TableSection section={section} />
    case 'tone-chart':
      return <ToneChart section={section} />
    case 'initial-grid':
      return <InitialGrid section={section} />
    case 'final-grid':
      return <FinalGrid section={section} />
    default:
      return null
  }
}

function TextSection({ section }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h2 className="font-bold text-gray-900 text-lg mb-3">{section.title}</h2>
      <div className="text-sm text-gray-600 leading-relaxed space-y-2">
        {section.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}

function TableSection({ section }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 overflow-x-auto">
      <h2 className="font-bold text-gray-900 text-lg mb-3">{section.title}</h2>
      {section.subtitle && <p className="text-xs text-gray-500 mb-3">{section.subtitle}</p>}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            {section.headers.map((h) => (
              <th key={h} className="text-left py-2 pr-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {section.rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`py-2.5 pr-4 ${j === 0 ? 'font-bold text-red-600 font-mono text-base' : 'text-gray-700'}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ToneChart({ section }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h2 className="font-bold text-gray-900 text-lg mb-1">{section.title}</h2>
      <p className="text-xs text-gray-500 mb-4">{section.subtitle}</p>
      <div className="grid grid-cols-1 gap-2">
        {section.tones.map((tone) => (
          <div key={tone.number} className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3">
            <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              {tone.number}
            </span>
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-gray-800 text-sm">{tone.name}</span>
              <span className="text-gray-400 text-xs ml-2">{tone.contour}</span>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="font-bold text-red-600 font-mono">{tone.yaleMark}</span>
              <span className="text-gray-400 text-xs ml-2">/ {tone.jyutpingNum}</span>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <div className="text-right">
                <span className="font-chinese text-xl font-bold text-gray-900">{tone.example}</span>
                <p className="text-xs text-gray-500">{tone.meaning}</p>
              </div>
              <SpeakButton characters={tone.example} size="sm" />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-3 italic">{section.note}</p>
    </div>
  )
}

function InitialGrid({ section }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h2 className="font-bold text-gray-900 text-lg mb-1">{section.title}</h2>
      <p className="text-xs text-gray-500 mb-4">{section.subtitle}</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {section.initials.map((item) => (
          <div key={item.yale} className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-red-600 font-mono text-lg">{item.yale}</span>
              <span className="text-xs text-gray-400">/{item.ipa}/</span>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className="font-chinese text-base font-bold text-gray-800">{item.exChar}</span>
              <SpeakButton characters={item.exChar} size="sm" />
              <span className="text-xs text-gray-500">{item.exYale}</span>
              <span className="text-xs text-gray-400">– {item.exEng}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FinalGrid({ section }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 overflow-x-auto">
      <h2 className="font-bold text-gray-900 text-lg mb-1">{section.title}</h2>
      <p className="text-xs text-gray-500 mb-4">{section.subtitle}</p>
      {section.groups.map((group) => (
        <div key={group.label} className="mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{group.label}</p>
          <div className="flex flex-wrap gap-2">
            {group.finals.map((f) => (
              <div key={f.yale} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-center min-w-[64px]">
                <p className="font-bold text-red-600 font-mono text-sm">{f.yale}</p>
                {f.exChar && (
                  <p className="font-chinese text-xs text-gray-600 mt-0.5">{f.exChar} <span className="text-gray-400 not-italic">{f.exEng}</span></p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
