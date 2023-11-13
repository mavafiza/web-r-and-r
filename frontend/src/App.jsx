import { useState } from 'react';
import { logo } from './assets';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col text-center h-screen items-center justify-center'>

        <div className='flex'>

          <a href="#" target="_blank">
            <img src={logo} className="logo w-72" alt="logo homini" />
          </a>
        </div>

        <h1 className="text-3xl font-secondary font-bold">
          Tirabuzon
        </h1>

        <div className="card">
          <button className="bg-rojo-rodar hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-2" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

        </div>


      </div>
    </>
  )
}

export default App
