import { useContext } from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
  const value = useContext(counterContext)
  return (
    <span className="text-sm font-black">
      {value.count}
    </span>
  )
}

export default Component1