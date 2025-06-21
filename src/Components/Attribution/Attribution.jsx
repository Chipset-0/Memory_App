import './Attribution.css'
import potion from "../../assets/Potion.png"
import { useState } from 'react'

export default function Attribution()
{
    const [show, setShow] = useState(false);

    return (<div className='attribution-container'>
        <img src={potion} className="attribution-image" onClick={() => {setShow(!show)}}></img>
        <div className={`attribution-text ${show ? "" : "hide"}`}>
            <h2>All Pokémon images and sprites are © Nintendo, Game Freak, Creatures Inc</h2>
            <h2>Sprites sourced through PokeAPI: https://pokeapi.co/</h2>
        </div>
    </div>)
}