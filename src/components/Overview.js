import React from 'react'


export default function Overview({sortMode, childToParent, cardData}) {
    //List all cards & passed function from parent component
    const listCards = cardData.map((card) =>
    <li key={card.id} onClick={() => childToParent(card.id)}>
        <p>{card.real_name}<br/>
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
    <li key={card.id} onClick={() => childToParent(card.id)}>
        <p>{card.real_name}<br/>
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
    <li key={card.id} onClick={() => childToParent(card.id)}>
        <p>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</p>
    </li>
    );
    
    //Display cards depending on mode (unsorted by default)
    if(sortMode === 'asc'){
    return(
        <ul>
           {listAsc}
        </ul>
    );
    }
    if(sortMode === 'desc'){
        return (
        <ul>
           {listDesc}
        </ul>
    );
    }
    else return (
        <ul>
            <h2>{sortMode}</h2> 
           {listCards}
        </ul>
    )
}