import React from 'react'


export default function Details({selected, cardData}) {

    const listCards = cardData.map((card) =>
    <div key={card.id}>
        <h1 className="red-details">{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</h1>
    </div>
    );
    
    return(
        <div className="details">
           {listCards[selected-1]}
        </div>
    )
}