import { useState } from 'react'
import './Card.css'

export default function Card({imageLink, index, clickFunction})
{
    return (
            <div class="card-container">
                <img src={imageLink} class="card-image" />
            </div>
    )
}