import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to My React App!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You clicked {count} times
        </button>
      </div>
      {/* Changed footer text */}
      <p className="read-the-docs">
        Learn more about React and Vite by clicking the logos above.
      </p>
    </>
  )
}

export default App
