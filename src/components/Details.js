import React from 'react'


export default function Details({selected, cardData}) {
   //array funktion - array.filter? oder for loop, return first matching element yani selected id === current id
    const listCards = cardData.map((card) =>
    <div key={card.id}>
        <h1>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</h1>
    </div>
    );
    
    return(
        <>
           {listCards[selected-1]}
        </>
    )
}