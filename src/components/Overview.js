import React from 'react'
import {useState} from 'react'

export default function Overview({sortMode, childToParent, cardData}) {
    const [isActive, setActive] = useState("false");

    const ToggleClass = () => {
        setActive(!isActive);
    };

    //List all cards & passed function from parent component
    const listCards = cardData.map((card) =>
    <li key={card.id} onClick={() => childToParent(card.id) }
    className='card' id={`card-`+card.id}>
        <p className='card-text'>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</p>
    </li>
    );

    //Sort all cards in ascending order
    const sortAscending = [...cardData].sort((a, b) =>
    a.real_name > b.real_name ? 1 : -1,
    );

    //List cards in ascending order & passed function from parent component
    const listAsc = sortAscending.map((card) =>
    <li key={card.id} onClick={() => childToParent(card.id)}
    className='card' id={`card-`+card.id}>
        <p className='card-text' id={card.id}>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</p>
    </li>
    );

    //Sort all cards in descending order
    const sortDescending = [...cardData].sort((a, b) =>
    a.real_name > b.real_name ? -1 : 1,
    );
    
    //List cards in descending order & passed function from parent component
    const listDesc = sortDescending.map((card) =>
    <li key={card.id} onClick={() => childToParent(card.id)}
    className='card' id={`card-`+card.id}>
        <p className='card-text'>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</p>
    </li>
    );
    
    //Display cards depending on mode (unsorted by default)
    if(sortMode === 'asc'){
    return(
        <>
        <h1 className='card-title'>Overview</h1>
        <ul className='card-container'>
           {listAsc}
        </ul>
        </>
    );
    }
    if(sortMode === 'desc'){
        return (
        <>
        <h1 className='card-title'>Overview</h1>
        <ul className='card-container'>
           {listDesc}
        </ul>
        </>
    );
    }
    else return (
        <>
        <h1 className='card-title'>Overview</h1>
        <ul className='card-container'>
           {listCards}
        </ul>
        </>
    )
}