import { useState, useEffect } from 'react'
import './ScoreHeader.css'

export default function ScoreHeader({score, highScore})
{

    return (
        <header className="score-header">
            <h1>
                Pokemon Memory Match
            </h1>
            <div className="score-horizontal-container">
                <h2>Score: {score}</h2>
                <h2>Literally Every Pokemon</h2>
                <h2>High Score: {highScore}</h2>
            </div>
        </header>
    )
}