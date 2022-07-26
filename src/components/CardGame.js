import React from 'react'
import Overview from './Overview';
import Details from './Details';
import Controls from './Controls';
import cardService from '../services/cards';
import card_data from '../data/card_data';


import { useState, useEffect} from 'react';


export default function CardGame() {
    const [sortMode, setSortMode] = useState('');
    const [selected, setSelected] = useState('');

   useEffect(() => {
        cardService
            .getAll()
            .then(response => {
                console.log('Status Code: 200 OK')
            })
    }, [])


   const addCard = (event) => {
    event.preventDefault()
    
    //find objects and their elements from an array by "selected" id
    const cardObject = card_data.find((el) => el.id === selected);
   
    //prevent empty submission
    if(selected !== ''){
    cardService
        .create(cardObject)
        .then(response => {
            alert(`Added ${cardObject.real_name}`);
        })
        .catch(error => {
            console.log(error.response.data);
            alert(`${cardObject.real_name} already added`);
        });
        }
    }

    const handleAscChange = () => {
        setSortMode('asc');
    };

    const handleDescChange = () => {
        setSortMode('desc');
    };

    
    
    const childToParent = (childdata) => {
        setSelected(childdata);
    }
    


    return(
        <main className='card-game'>
            <div className="row-top">
        <Details selected={selected} 
                cardData={card_data}
            />
        <Controls 
            sortMode={sortMode} 
            handleDescChange={handleDescChange} 
            handleAscChange={handleAscChange} 
            handleSubmit={addCard}
            />
        </div>
        <Overview sortMode={sortMode} 
            childToParent={childToParent} 
            cardData={card_data} 
            selected={selected}
            />
        </main>
    )
}