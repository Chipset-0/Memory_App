import { useState, useEffect } from 'react'
import './Card.css'

export default function Card({pokeId, clickFunction, hidden=false})
{
    const [imageUrl, setImageUrl] = useState("")
    
    const [isClicked, setIsClicked] = useState(false);

    const cardClickFunction = () =>
    {
        clickFunction(isClicked);
        if (!isClicked)
        {
            setIsClicked(true);
        }
    }


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`).then(response => response.json())
        .then(data => {
            setImageUrl(data.sprites.front_default)
        })
        .catch(error => console.error("Error fetching Pokémon data:", error))
    })

    return (
            <div className="card-container">
                {imageUrl ? <img src={imageUrl} className={`card-image ${hidden ? "hide" : ""}`} onClick={() => cardClickFunction()}/> : <p>Loading</p>}
            </div>
    )
}