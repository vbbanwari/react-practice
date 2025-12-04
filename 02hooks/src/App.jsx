import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(15)
  const addValue = () => {
    setCount(prev => prev + 1);
  }

  const removeValue = () => {
    setCount(prev => prev - 1);
  }

  {/* {useEffect hook example} */ }
  useEffect(() => {
    console.log("if counter changes this will print to the console");
  }, [counter]);

  return (
    <>



      {/* {useState hook  example} */}

      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
