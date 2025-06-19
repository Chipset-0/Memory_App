import { useState } from 'react'
import './App.css'
import CardList from './Components/List/CardList'
import ScoreHeader from './Components/ScoreHeader/ScoreHeader'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  return (
    <>
      <link href="https://fonts.cdnfonts.com/css/orange-kid" rel="stylesheet"></link>
      <ScoreHeader score={score} highScore={highScore} />
      <div>
        <CardList score={score} highScore={highScore} setScore={setScore} setHighScore={setHighScore}/>
      </div>
      <footer>

      </footer>
    </>
  )
}

export default App
