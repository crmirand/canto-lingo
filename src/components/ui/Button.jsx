export function Button({ children, onClick, variant = 'primary', disabled = false, className = '', size = 'md' }) {
  const base = 'font-semibold rounded-xl transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100'

  const variants = {
    primary: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 shadow-md hover:shadow-lg',
    secondary: 'bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 focus:ring-gray-300',
    success: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400 shadow-md',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-600 focus:ring-gray-300',
    outline: 'bg-transparent border-2 border-red-500 text-red-600 hover:bg-red-50 focus:ring-red-400',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}
