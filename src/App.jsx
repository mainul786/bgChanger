import { useState } from 'react'
import './App.css'

function App() {
  const [colur, setColur] = useState('olive')

  return (
    <>
      <div className='w-full h-screen duration-200
      ' style={{backgroundColor:colur}}>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
              <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                <button 
                onClick={()=>setColur('red')}
                className='outline-none px-4 py-2 rounded-full text-white  shadow-lg'
                style={{backgroundColor:'red'}}
                >Red</button>
                <button 
                onClick={()=>setColur('green')}
                className='outline-none px-4 py-2 rounded-full text-white  shadow-lg'
                style={{backgroundColor:'green'}}
                >Green</button>
                <button 
                onClick={()=>setColur('blue')}
                className='outline-none px-4 py-2 rounded-full text-white  shadow-lg'
                style={{backgroundColor:'blue'}}
                >blue</button>
                <button 
                onClick={()=>setColur('yellow')}
                className='outline-none px-4 py-2 rounded-full text-white  shadow-lg'
                style={{backgroundColor:'yellow'}}
                >yellow</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
