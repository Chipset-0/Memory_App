import { useState, useEffect } from 'react'
import './CardList.css'
import Card from '../Card/Card'

const TOTAL_CARDS = 1025
const VISIBLE_AMOUNT = 30

function shuffle(array)
{
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export default function CardList({category, cardAmount=30})
{
    const [cards, setCards] = useState([])
    
    useEffect(() => {
        const availId = Array.from({length : TOTAL_CARDS}, (_, i) => i+1);
        const shuffled = shuffle(availId);
        const selected = shuffled.slice(0, cardAmount)

        const indices = Array.from({ length: TOTAL_CARDS }, (_, i) => i);
        const shuffledInd = shuffle(indices);

        const generatedCards = selected.map((id, idx) => ({
        pokeId: id,
        cardIndex: idx
        }));

        setCards(generatedCards);
    }, [cardAmount]);
    
    const onClickFunc = (clicked) => {
        console.log(clicked)
    }

    console.log(cards)
    return (
        <div className='card-list-container'>
            {cards.map((card, index) => (<Card key={index} pokeId={card.pokeId} clickFunction={onClickFunc}/>))}
        </div>
    )
}