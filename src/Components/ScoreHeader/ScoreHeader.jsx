import { useState, useEffect } from 'react'
import './ScoreHeader.css'

export default function ScoreHeader({score, highScore})
{

    return (
        <header class="score-header">
            <h1>
                Pokemon Memory Match
            </h1>
            <div class="score-horizontal-container">
                <h3>Score: {score}</h3>
                <button id="reset-button">Reset</button>
                <h3>High Score: {highScore}</h3>
            </div>
        </header>
    )
}