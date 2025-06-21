import { useState } from 'react'
import './App.css'
import CardList from './Components/List/CardList'
import ScoreHeader from './Components/ScoreHeader/ScoreHeader'
import Attribution from './Components/Attribution/Attribution'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  return (
    <>
      <link href="https://fonts.cdnfonts.com/css/orange-kid" rel="stylesheet"></link>
      <Attribution />
      <ScoreHeader score={score} highScore={highScore} />
      <div>
        <CardList score={score} highScore={highScore} setScore={setScore} setHighScore={setHighScore}/>
      </div>
    </>
  )
}

export default App
