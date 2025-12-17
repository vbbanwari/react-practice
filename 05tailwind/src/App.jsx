import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center gap-8 justify-start  h-100 border-2 border-dashed
       border-gray-400 grid-cols-3">

        <div className=" p-3  m-1  bg-blue-500 text-white rounded">Item 1</div>
        <div className="pt-4 m-1 bg-blue-700 text-white rounded">Item 2</div>
        <div className="pr-4 m-1 bg-blue-900 text-white rounded">Item 3</div>

        {/* {checking properties of text related} */}

        <p className='text-2xl font-bold tracking-tight text-left '
        > Checking properties of text</p>
        <p className="tracking-tighter text-right">This text has tighter letter spacing.</p>
        <p className="tracking-normal text-left">This text has normal letter spacing.</p>
        <p className="tracking-widest">This text has wider letter spacing.</p>

        {/* {color and border} */}
        <div className=" p-3  m-1  bg-blue-500 text-white border-4 border-amber-300 rounded-4xl"
        >border and  color testing</div>


        {/* 
         {backround effect} */}

        <p className=" bg-liner-to-r from-red-500 to-yellow-500 p-8
         text-white font-bold opacity-70">This text has background effect.</p>

        {/* {transition } */}
        <button class="
                        bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg
                        
                        transition duration-500 ease-out
                        
                        hover:scale-105 hover:opacity-80
                      ">
          Smooth Hover Effect
        </button>
        <button class="
                  bg-green-500 text-white py-2 px-4 rounded-lg
                cursor-pointer select-none transition duration-100 
                  active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400
                ">
          Interactive Button
        </button>




      </div>

    </>
  )
}

export default App
