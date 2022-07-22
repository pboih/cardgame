import React from 'react'


export default function Overview({sortMode, childToParent, cardData}) {
    //List all cards & passed function from parent component
    const listCards = cardData.map((card) =>
    <div key={card.id} onClick={() => childToParent(card.id)}>
        <p>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</p>
    </div>
    );

    //Sort all cards in ascending order
    const sortAscending = [...cardData].sort((a, b) =>
    a.real_name > b.real_name ? 1 : -1,
    );

    //List cards in ascending order & passed function from parent component
    const listAsc = sortAscending.map((card) =>
    <div key={card.id} onClick={() => childToParent(card.id)}>
        <p>{card.id}</p>
        <p>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</p>
    </div>
    );

    //Sort all cards in descending order
    const sortDescending = [...cardData].sort((a, b) =>
    a.real_name > b.real_name ? -1 : 1,
    );
    
    //List cards in descending order & passed function from parent component
    const listDesc = sortDescending.map((card) =>
    <div key={card.id} onClick={() => childToParent(card.id)}>
        <p>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</p>
    </div>
    );
    
    //Display cards depending on mode (unsorted by default)
    if(sortMode === 'asc'){
    return(
        <div>
           <h2>{sortMode}</h2> 
           {listAsc}
        </div>
    );
    }
    if(sortMode === 'desc'){
        return (
        <div>
            <h2>{sortMode}</h2> 
           {listDesc}
        </div>
    );
    }
    else return (
        <div>
            <h2>{sortMode}</h2> 
           {listCards}
        </div>
    )
}