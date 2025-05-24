import { useState } from 'react'
import { counterContext } from './context/context'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <counterContext.Provider value={{count, setCount}}>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
        <Navbar/>
        <main className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="glass-card p-8 rounded-2xl shadow-2xl backdrop-blur-lg">
              <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
                Quantum Counter
              </h1>
              
              <div className="flex flex-col items-center gap-8">
                <div className="p-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-300/30 shadow-lg">
                  <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                    {count}
                  </div>
                </div>
                
                <button 
                  onClick={() => setCount(count + 1)}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Boost Count
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </counterContext.Provider>
  )
}

export default App