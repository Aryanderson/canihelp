import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>CanIHelp</h1>
        <p>Frontend React com Vite</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Contador: {count}
          </button>
          <p>Clique no botão para incrementar</p>
        </div>
      </header>
    </div>
  )
}

export default App