import { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'

const Button = () => {
  const value = useContext(counterContext)
  return (
    <button 
      onClick={() => value.setCount(count => count + 1)}
      className="flex items-center gap-3 px-5 py-3 rounded-lg bg-gradient-to-br from-purple-600/80 to-blue-600/80 hover:from-purple-500/80 hover:to-blue-500/80 text-white font-medium shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group"
    >
      <span className="bg-cyan-400/90 group-hover:bg-cyan-300/90 text-gray-900 rounded-full w-7 h-7 flex items-center justify-center transition-all">
        <Component1/>
      </span>
      <span className="drop-shadow-md">Pulse +1</span>
    </button>
  )
}

export default Button