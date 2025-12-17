import React, { useState } from 'react'


const App = () => {
  const[colour,setColour]=useState('olive')
  return (
    <>
      <div className='w-full h-screen duration-2000 ' style={{backgroundColor:colour}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                  <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
                    <button onClick={()=>setColour("red")} className='outline-none
                     px-4 py-1 rounded-full text-white shadow-11'
                     style={{backgroundColor:"red"}}>
                      Red
                    </button>                    
                    <button onClick={()=>setColour("green")} className='outline-none
                     px-4 py-1 rounded-full text-white shadow-11'
                     style={{backgroundColor:"green"}}>
                      green
                    </button>                    
                    <button onClick={()=>setColour("yellow")} className='outline-none
                     px-4 py-1 rounded-full text-white shadow-11'
                     style={{backgroundColor:"yellow"}}>
                      yellow
                    </button>                    
                    <button onClick={()=>setColour("black")} className='outline-none
                     px-4 py-1 rounded-full text-white shadow-11'
                     style={{backgroundColor:"black"}}>
                      black
                    </button>
                  </div>

        </div>

      </div>
      
    </>
  )
}

export default App
