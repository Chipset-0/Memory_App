import { useState, useEffect } from 'react'
import './CardList.css'
import Card from '../Card/Card'

export default function CardList({category})
{
    const importAllImages = (requireContext) => requireContext.keys().map(requireContext)

    const useImageArray = (directory) => {
        const [images, setImages] = useState([])
    }

    useEffect(() => {
        const images = importAllImages
    })

    return (
        <div className='card-list-container' onClick={() => clickFunction}>
            <Card image=""/>
        </div>
    )
}