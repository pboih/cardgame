import React from 'react'
import card_data from '../data/card_data';

export default function Details() {
    const listCards = card_data.map((card) =>
    <div>
        <h3>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</h3>
    </div>
    );
    
    return(
        <div>
           {listCards[0]}
        </div>
    )
}