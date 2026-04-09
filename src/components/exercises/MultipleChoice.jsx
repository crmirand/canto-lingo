import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import { Button } from '../ui/Button.jsx'

export function MultipleChoice({ exercise, onComplete }) {
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const { promptLabel, promptDisplay, correctAnswer, choices } = exercise

  const isCorrect = selected === correctAnswer

  function handleSelect(choice) {
    if (confirmed) return
    setSelected(choice)
  }

  function handleConfirm() {
    if (!selected || confirmed) return
    setConfirmed(true)
  }

  function choiceStyle(choice) {
    if (!confirmed) {
      return selected === choice
        ? 'border-red-500 bg-red-50 text-red-700 shadow-md scale-[1.01]'
        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
    }
    if (choice === correctAnswer) return 'border-green-500 bg-green-50 text-green-800'
    if (choice === selected && choice !== correctAnswer) return 'border-red-400 bg-red-50 text-red-700 animate-shake'
    return 'border-gray-200 bg-white opacity-50'
  }

  const isChineseChoice = exercise.subtype === 'mc-characters'
  const isYaleChoice = exercise.subtype === 'mc-yale' || exercise.subtype === 'mc-jyutping'

  return (
    <div className="flex flex-col gap-5 w-full max-w-md mx-auto animate-fade-in">
      {/* Prompt */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">{promptLabel}</p>
        {promptDisplay.characters && (
          <p className="font-chinese text-5xl font-bold text-gray-900 leading-tight">{promptDisplay.characters}</p>
        )}
        {promptDisplay.yale && (
          <p className="text-xl font-semibold text-red-600 mt-1">{promptDisplay.yale}</p>
        )}
        {promptDisplay.english && (
          <p className="text-2xl font-bold text-gray-800">{promptDisplay.english}</p>
        )}
      </div>

      {/* Choices */}
      <div className="grid grid-cols-1 gap-3">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleSelect(choice)}
            disabled={confirmed}
            className={`w-full text-left px-5 py-4 rounded-xl border-2 font-semibold transition-all duration-150 ${choiceStyle(choice)} ${
              isChineseChoice ? 'font-chinese text-2xl' : isYaleChoice ? 'text-lg' : 'text-base'
            }`}
          >
            <span className="flex items-center justify-between gap-3">
              <span>{choice}</span>
              {confirmed && choice === correctAnswer && (
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
              )}
              {confirmed && choice === selected && choice !== correctAnswer && (
                <XCircle size={20} className="text-red-500 flex-shrink-0" />
              )}
            </span>
          </button>
        ))}
      </div>

      {/* Feedback */}
      {confirmed && (
        <div
          className={`rounded-xl p-4 flex items-center gap-3 animate-slide-up ${
            isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}
        >
          {isCorrect ? (
            <CheckCircle size={22} className="text-green-500 flex-shrink-0" />
          ) : (
            <XCircle size={22} className="text-red-500 flex-shrink-0" />
          )}
          <div>
            <p className={`font-bold text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {isCorrect ? 'Correct!' : 'Not quite'}
            </p>
            {!isCorrect && (
              <p className="text-sm text-gray-600 mt-0.5">
                Answer: <span className="font-semibold">{correctAnswer}</span>
              </p>
            )}
          </div>
        </div>
      )}

      {/* Action button */}
      {!confirmed ? (
        <Button variant="primary" className="w-full" disabled={!selected} onClick={handleConfirm}>
          Check
        </Button>
      ) : (
        <Button variant={isCorrect ? 'success' : 'primary'} className="w-full" onClick={() => onComplete(isCorrect)}>
          Continue
        </Button>
      )}
    </div>
  )
}
