import React from 'react'
import card_data from '../data/card_data';

export default function Overview() {
    const listCards = card_data.map((card) =>
    <div>
        <p>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</p>
    </div>
    );
    
    return(
        <div>
           {listCards}
        </div>
    )
}