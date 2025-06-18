import { useState } from 'react'
import './App.css'
import CardList from './Components/List/CardList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>

      </header>
      <div>
        <CardList />
      </div>
      <footer>

      </footer>
    </>
  )
}

export default App
