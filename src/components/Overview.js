import React from 'react'
import card_data from '../data/card_data';


export default function Overview({sortMode}) {
    //List all cards
    const listCards = card_data.map((card) =>
    <div key={card.id}>
        <p>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</p>
    </div>
    );

    //Sort all cards in ascending order
    const strAscending = [...card_data].sort((a, b) =>
    a.real_name > b.real_name ? 1 : -1,
    );

    //List cards in ascending order
    const listAsc = strAscending.map((card) =>
    <div key={card.id}>
        <p>{card.real_name}<br/>
        {card.player_name}<br/>
        {card.asset}</p>
    </div>
    );

    //Sort all cards in descending order
    const strDescending = [...card_data].sort((a, b) =>
    a.real_name > b.real_name ? -1 : 1,
    );
    
    //List cards in descending order
    const listDesc = strDescending.map((card) =>
    <div key={card.id}>
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