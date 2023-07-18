import { useState } from 'react'
import { Hero,Info } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
    <div className=" main ">

      <div className="gradient"/>

    </div>

    <div className=" z-10 ">

      <Hero/>
      <Info />
      
      
    </div>

    </main>
  )
}

export default App
