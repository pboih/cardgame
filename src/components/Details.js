import React from 'react'


export default function Details({selected, cardData}) {

    const listCards = cardData.map((card) =>
    <div key={card.id} className='details'>
        <h1 className='details-title'>Details</h1>
        <h2 className='details-text'>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</h2>
    </div>
    );
    
    return(
        <div>
           {listCards[selected-1]}
        </div>
    )
}