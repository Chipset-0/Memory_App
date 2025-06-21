import { useState, useEffect } from 'react'
import './Card.css'
import loadIcon from "../../assets/Pokeball.png"
import loadIconShiny from "../../assets/Premiereball.png"

export default function Card({pokeId, clickFunction, hidden=false})
{
    const [imageUrl, setImageUrl] = useState("")
    const [normalUrl, setNormalUrl] = useState("")
    const [shinyUrl, setShinyUrl] = useState("")
    const [loaded, setLoaded] = useState(false)

    const [normalLoaded, setNormalLoaded] = useState(false)
    const [shinyLoaded, setShinyLoaded] = useState(false)


    useEffect(() => {
        setNormalUrl(loadIcon)
        setShinyUrl(loadIconShiny)
        setImageUrl(loadIcon)
        setLoaded(false);
        setNormalLoaded(false)
        setShinyLoaded(false)

        const normalSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`
        const shinySrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeId}.png`
        
        const normalImage = new Image()
        normalImage.src = normalSrc

        normalImage.onload = () => {
            setNormalLoaded(true)
            setNormalUrl(normalImage.src)
        }


        const shinyImage = new Image()
        shinyImage.src = shinySrc

        shinyImage.onload = () => {
            setShinyLoaded(true)
            setShinyUrl(shinyImage.src)
        }
    }, [pokeId])

    useEffect(() => {
        if (normalLoaded && shinyLoaded)
        {
            setLoaded(true)
            setImageUrl(normalUrl)
        }
    }, [normalLoaded, shinyLoaded])

    const handleClick = () =>
    {
        if (loaded)
        {
            clickFunction(pokeId)
        }
        else
        {
            console.log("Image is not loaded yet")
        }
    }

    const handleMouseEnter = () =>
    {
        setImageUrl(shinyUrl);
    }

    const handleMouseLeave = () =>
    {
        setImageUrl(normalUrl)
    }

    return (
            <div className="card-container">
                {normalUrl ? <img src={imageUrl} className={`card-image ${hidden ? "hide" : ""}`} 
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}/> : <p>Loading</p>}
            </div>
    )
}