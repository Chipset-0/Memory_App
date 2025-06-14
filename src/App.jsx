import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
