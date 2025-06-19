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

export default function CardList({cardAmount=30, score, highScore, setScore, setHighScore})
{
    const [cards, setCards] = useState([])
    
    useEffect(() => {
        const availId = Array.from({length : TOTAL_CARDS}, (_, i) => i+1);
        const shuffled = shuffle(availId);
        const selected = shuffled.slice(0, cardAmount)

        const generatedCards = selected.map((id, idx) => ({
        pokeId: id,
        cardIndex: idx
        }));

        setCards(generatedCards);
    }, [cardAmount]);
    
    const onClickFunc = (clicked) => {
        if(clicked)
        {
            console.log("Double Click, End Game")
            setScore(0);
        }
        else
        {
            setScore(score+1);
        }
    }

    useEffect(() => {
        if (highScore < score)
        {
            setHighScore(score)
        }
    }, [score])

    console.log(cards)
    return (
        <div className='card-list-container'>
            {cards.map((card, index) => (<Card key={index} pokeId={card.pokeId} clickFunction={onClickFunc}/>))}
        </div>
    )
}