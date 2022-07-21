import React from 'react'
import card_data from '../data/card_data';

export default function Details({selected}) {
    const listCards = card_data.map((card) =>
    <div key={card.id}>
        <h1>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</h1>
    </div>
    );
    
    return(
        <div>
           {listCards[selected-1]}
        </div>
    )
}