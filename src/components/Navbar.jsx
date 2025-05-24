import Button from './Button'

const Navbar = () => {
  return (
    <nav className="backdrop-blur-lg bg-white/5 border-b border-cyan-400/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Quantum<span className="text-white">UI</span>
        </h1>
        <Button/>
      </div>
    </nav>
  )
}

export default Navbar